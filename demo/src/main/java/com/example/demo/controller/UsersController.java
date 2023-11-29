package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Users;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    private UserService userService;

    // Get all users with optional username filtering
    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers(@RequestParam(required = false) String username) {
        List<Users> users = userService.getAllUsers(username);

        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get a user by ID
    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable("id") Integer id) {
        Optional<Users> usersData = userService.getUserById(id);

        return usersData.map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new user
    @PostMapping("/users")
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        Users createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // Update an existing user by ID
    @PutMapping("/users/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Integer id, @RequestBody Users user) {
        Optional<Users> updatedUser = userService.updateUser(id, user);

        return updatedUser.map(u -> new ResponseEntity<>(u, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Delete a user by ID
    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Delete all users
    @DeleteMapping("/users")
    public ResponseEntity<HttpStatus> deleteAllUsers() {
        userService.deleteAllUsers();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
