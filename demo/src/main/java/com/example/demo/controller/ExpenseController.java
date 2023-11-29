package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Expenses;
import com.example.demo.service.ExpenseService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Get all expenses with optional user ID filtering
    @GetMapping("/expenses")
    public ResponseEntity<List<Expenses>> getAllExpenses(@RequestParam(required = false) Integer userId) {
        List<Expenses> expenses = expenseService.getAllExpenses(userId);

        if (expenses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    // Get an expense by ID
    @GetMapping("/expenses/{id}")
    public ResponseEntity<Expenses> getExpenseById(@PathVariable("id") Integer id) {
        Optional<Expenses> expenseData = expenseService.getExpenseById(id);

        return expenseData.map(expense -> new ResponseEntity<>(expense, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new expense
    @PostMapping("/expenses")
    public ResponseEntity<Expenses> createExpense(@RequestBody Expenses expense) {
        Expenses createdExpense = expenseService.createExpense(expense);
        return new ResponseEntity<>(createdExpense, HttpStatus.CREATED);
    }

    // Update an existing expense by ID
    @PutMapping("/expenses/{id}")
    public ResponseEntity<Expenses> updateExpense(@PathVariable("id") Integer id, @RequestBody Expenses expense) {
        Optional<Expenses> updatedExpense = expenseService.updateExpense(id, expense);

        return updatedExpense.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Delete an expense by ID
    @DeleteMapping("/expenses/{id}")
    public ResponseEntity<HttpStatus> deleteExpense(@PathVariable("id") Integer id) {
        expenseService.deleteExpense(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Delete all expenses
    @DeleteMapping("/expenses")
    public ResponseEntity<HttpStatus> deleteAllExpenses() {
        expenseService.deleteAllExpenses();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
