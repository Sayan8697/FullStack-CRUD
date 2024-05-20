package com.sc.fullstackbackend.controller;

import com.sc.fullstackbackend.exception.UserNotFoundException;
import com.sc.fullstackbackend.model.User;
import com.sc.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/getUser")
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") Long id) {
         return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable("id")Long id, @RequestBody User newUser ){
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("user/{id}")
    public String deleteUser(@PathVariable("id") Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully.";
    }
}
