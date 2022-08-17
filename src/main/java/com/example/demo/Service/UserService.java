package com.example.demo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.TokenRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.SignInDto;
import com.example.demo.dto.SignupDto;
import com.example.demo.model.AuthenticationToken;
import com.example.demo.model.Bank;
import com.example.demo.model.Users;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    TokenRepository tokenRepository;
    @Autowired
    AuthenticationService authenticationService;

    
    public ApiResponse signUp(SignupDto signupDto) {
        //To Check if the user is already there
        if(Objects.nonNull(userRepository.findByEmail(signupDto.getEmail()))) {
            //we have a user
            return new ApiResponse(false, "User already present");
        }
 
        // hash the password
        String encryptedpassword =signupDto.getPassword();
        try
        {
            encryptedpassword=hashPassword(signupDto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
       
        //save the user
        Users user =new Users(signupDto.getEmail(),encryptedpassword);
        userRepository.save(user);
        //create the token
        final AuthenticationToken authenticationToken = new AuthenticationToken(user);
        authenticationService.saveConfirmationToken(authenticationToken);
        userRepository.findByEmail(signupDto.getEmail());
        //return new ResponseDto("Success","user created successfully");
        return new ApiResponse(true, "user created successfully");
    }

    //hash the password
    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md=MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String hash= DatatypeConverter.printHexBinary(digest).toUpperCase();
        return hash;
    }

    public String signIn(SignInDto signInDto) {
        //find user by email
        Users user =userRepository.findByEmail(signInDto.getEmail());
        if(Objects.isNull(user))
        {
            return "User is not valid";
        }
        try{
            if(!user.getPassword().equals(hashPassword(signInDto.getPassword())))
            {
                return "Wrong password";
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        //compare the password in DB
        //if password match
        AuthenticationToken token =authenticationService.getToken(user);
        //retrieve the token
        if(Objects.isNull(token))
        {
            return "Token is not present";
        }
        //return new SigninResponseDto("Success",token.getToken(),user.getUserType());
        return "Login Successful";
    }

//    // list of all the users
//    public List<SignupDto> listUser() {
//        // first fetch all the users
//        List<User> users = userRepository.findAll();
//        List<SignupDto> signupDtos = new ArrayList<>();
//        for(User user1 : users) {
//            // for each user change it to DTO
//            signupDtos.add(new SignupDto(user1));
//        }
//        return signupDtos;
//    }





}