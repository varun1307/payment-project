package com.example.demo.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.TokenRepository;
import com.example.demo.exceptions.AuthenticationFailException;
import com.example.demo.model.AuthenticationToken;
import com.example.demo.model.Users;

import java.util.Objects;

@Service
public class AuthenticationService {

    @Autowired
    TokenRepository tokenRepository;
    public void saveConfirmationToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }

    public AuthenticationToken getToken(Users user) {
        return tokenRepository.findByUser(user);
    }
    public Users getUser(String token){
        final AuthenticationToken authenticationToken=tokenRepository.findByToken(token);
        if(Objects.isNull(token)){
            return null;
        }
        return authenticationToken.getUser();
    }
    
    public void authenticate(String token) throws AuthenticationFailException{
        if (Objects.isNull(token)){
            throw new AuthenticationFailException(false,"token not present");
        }
        if (Objects.isNull(getUser(token))){
            throw new AuthenticationFailException(false,"token not valid");
        }
    }
}







