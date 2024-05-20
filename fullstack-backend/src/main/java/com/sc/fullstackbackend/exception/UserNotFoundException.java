package com.sc.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("Could Not Found The User ID "+ id);
    }
}
