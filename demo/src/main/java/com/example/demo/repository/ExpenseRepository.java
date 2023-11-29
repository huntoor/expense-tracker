package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Expenses;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expenses, Integer> {
    // Custom query to find expenses by user ID
    List<Expenses> findByUserId(Integer userId);
}
