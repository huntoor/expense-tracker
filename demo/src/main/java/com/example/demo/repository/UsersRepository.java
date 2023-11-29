package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository; //interface that provides basic CRUD operations for working with JPA entities.

import com.example.demo.model.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
  List<Users> findByUsernameContaining(String username); // returns a List of Users objects
}