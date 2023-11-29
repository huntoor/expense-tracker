package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ExpenseCategory;
import com.example.demo.repository.ExpenseCategoryRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseCategoryService {

    @Autowired
    private ExpenseCategoryRepository expenseCategoryRepository;

    // Retrieve all expense categories
    public List<ExpenseCategory> getAllExpenseCategories() {
        List<ExpenseCategory> categories = new ArrayList<>();
        expenseCategoryRepository.findAll().forEach(categories::add);
        return categories;
    }

    // Retrieve an expense category by ID
    public Optional<ExpenseCategory> getExpenseCategoryById(Integer id) {
        return expenseCategoryRepository.findById(id);
    }

    // Create a new expense category
    public ExpenseCategory createExpenseCategory(ExpenseCategory category) {
        return expenseCategoryRepository.save(category);
    }

    // Update an existing expense category by ID
    public Optional<ExpenseCategory> updateExpenseCategory(Integer id, ExpenseCategory category) {
        Optional<ExpenseCategory> categoryData = expenseCategoryRepository.findById(id);

        if (categoryData.isPresent()) {
            ExpenseCategory existingCategory = categoryData.get();
            existingCategory.setCategoryName(category.getCategoryName());
            return Optional.of(expenseCategoryRepository.save(existingCategory));
        } else {
            return Optional.empty();
        }
    }

    // Delete an expense category by ID
    public void deleteExpenseCategory(Integer id) {
        expenseCategoryRepository.deleteById(id);
    }

    // Delete all expense categories
    public void deleteAllExpenseCategories() {
        expenseCategoryRepository.deleteAll();
    }
}
