package com.example.demo.Controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.UserService;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.SignInDto;
import com.example.demo.dto.SignupDto;
import com.example.demo.model.Users;

@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("user")
@RestController
public class UserController {
	@Autowired
	UserService userService;


	// signing up
	@PostMapping("/signup")
	public ApiResponse signup(@Valid @RequestBody SignupDto signupDto) {
		return userService.signUp(signupDto);
	}

	// signing in
	@PostMapping("/signin")
	public String signIn(@RequestBody SignInDto signInDto) {
		return userService.signIn(signInDto);
	}

}