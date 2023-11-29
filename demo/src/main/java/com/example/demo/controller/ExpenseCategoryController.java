package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.ExpenseCategory;
import com.example.demo.service.ExpenseCategoryService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ExpenseCategoryController {

    @Autowired
    private ExpenseCategoryService expenseCategoryService;

    // Get all expense categories
    @GetMapping("/expense-categories")
    public ResponseEntity<List<ExpenseCategory>> getAllExpenseCategories() {
        List<ExpenseCategory> categories = expenseCategoryService.getAllExpenseCategories();

        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    // Get an expense category by ID
    @GetMapping("/expense-categories/{id}")
    public ResponseEntity<ExpenseCategory> getExpenseCategoryById(@PathVariable("id") Integer id) {
        Optional<ExpenseCategory> categoryData = expenseCategoryService.getExpenseCategoryById(id);

        return categoryData.map(category -> new ResponseEntity<>(category, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new expense category
    @PostMapping("/expense-categories")
    public ResponseEntity<ExpenseCategory> createExpenseCategory(@RequestBody ExpenseCategory category) {
        ExpenseCategory createdCategory = expenseCategoryService.createExpenseCategory(category);
        return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
    }

    // Update an existing expense category by ID
    @PutMapping("/expense-categories/{id}")
    public ResponseEntity<ExpenseCategory> updateExpenseCategory(@PathVariable("id") Integer id, @RequestBody ExpenseCategory category) {
        Optional<ExpenseCategory> updatedCategory = expenseCategoryService.updateExpenseCategory(id, category);

        return updatedCategory.map(c -> new ResponseEntity<>(c, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Delete an expense category by ID
    @DeleteMapping("/expense-categories/{id}")
    public ResponseEntity<HttpStatus> deleteExpenseCategory(@PathVariable("id") Integer id) {
        expenseCategoryService.deleteExpenseCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Delete all expense categories
    @DeleteMapping("/expense-categories")
    public ResponseEntity<HttpStatus> deleteAllExpenseCategories() {
        expenseCategoryService.deleteAllExpenseCategories();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
