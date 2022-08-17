package com.example.demo.dto;
import com.example.demo.model.Users;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.validation.constraints.NotBlank;


public class SignupDto {
    private @NotBlank String email;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private @NotBlank String password;

    public SignupDto(Users user) {
        this.setEmail(user.getEmail());
    }

    public SignupDto() {
    }
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
}



