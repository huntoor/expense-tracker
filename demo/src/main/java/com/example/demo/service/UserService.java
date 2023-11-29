package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;

@Service
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    // Retrieve all users with optional username filtering
    public List<Users> getAllUsers(String username) {
        List<Users> users = new ArrayList<>();

        if (username == null)
            usersRepository.findAll().forEach(users::add);
        else
            usersRepository.findByUsernameContaining(username).forEach(users::add);

        return users;
    }

    // Retrieve a user by ID
    public Optional<Users> getUserById(Integer id) {
        return usersRepository.findById(id);
    }

    // Create a new user
    public Users createUser(Users user) {
        return usersRepository.save(new Users(user.getUsername(), user.getPassword(), user.getEmail()));
    }

    // Update an existing user by ID
    public Optional<Users> updateUser(Integer id, Users user) {
        Optional<Users> usersData = usersRepository.findById(id);

        if (usersData.isPresent()) {
            Users _user = usersData.get();
            _user.setUsername(user.getUsername());
            _user.setPassword(user.getPassword());
            return Optional.of(usersRepository.save(_user));
        } else {
            return Optional.empty();
        }
    }

    // Delete a user by ID
    public void deleteUser(Integer id) {
        usersRepository.deleteById(id);
    }

    // Delete all users
    public void deleteAllUsers() {
        usersRepository.deleteAll();
    }
}
