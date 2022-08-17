package com.example.demo.exceptions;

public class AuthenticationFailException extends IllegalArgumentException{
    private final boolean success;
    private final String message;
    public AuthenticationFailException(boolean success, String message)
    {
        super(message);
        this.message = message;
        this.success=success;
    }
}
