package com.Hunter.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hunter.backend.model.ExpenseCategory;
import com.Hunter.backend.model.Expenses;
import com.Hunter.backend.model.Users;
import com.Hunter.backend.repository.ExpenseCategoryRepository;
import com.Hunter.backend.repository.ExpenseRepository;
import com.Hunter.backend.repository.UsersRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Date;


@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UsersRepository usersRepository; // Add this line

    @Autowired
    private ExpenseCategoryRepository categoryRepository; // Add this line

    // Retrieve all expenses with optional user ID filtering
    public List<Expenses> getAllExpenses(Integer userId) {
        List<Expenses> expenses = new ArrayList<>();

        if (userId == null)
            expenseRepository.findAll().forEach(expenses::add);
        else
            expenseRepository.findByUserId(userId).forEach(expenses::add);

        return expenses;
    }

    // Retrieve an expense by ID
    public Optional<Expenses> getExpenseById(Integer id) {
        return expenseRepository.findById(id);
    }

    // Get Expenses by User ID
    public List<Expenses> getExpensesByUserId(Integer userId) {
        return expenseRepository.findByUserId(userId);
    }

    // Create a new expense
    public Expenses createExpense(Expenses expense) {
        return expenseRepository.save(expense);
    }

    // Cretae a new expense using userID and categoryId
    public Expenses createExpenseWithUserIdAndCategoryId(
            Integer amount, Date date, String description, Integer userId, Integer categoryId) {
        Optional<Users> user = usersRepository.findById(userId);
        Optional<ExpenseCategory> category = categoryRepository.findById(categoryId);

        if (user.isPresent() && category.isPresent()) {
            Expenses expense = new Expenses(user.get(), amount, date, category.get(), description);
            return expenseRepository.save(expense);
        } else {
            throw new IllegalArgumentException("Invalid user ID or category ID");
        }
    }


    // Update an existing expense by ID
    public Optional<Expenses> updateExpense(Integer id, Expenses expense) {
        Optional<Expenses> expenseData = expenseRepository.findById(id);

        if (expenseData.isPresent()) {
            Expenses existingExpense = expenseData.get();
            existingExpense.setUser(expense.getUser());
            existingExpense.setAmount(expense.getAmount());
            existingExpense.setDate(expense.getDate());
            existingExpense.setCategory(expense.getCategory());
            existingExpense.setDescription(expense.getDescription());
            return Optional.of(expenseRepository.save(existingExpense));
        } else {
            return Optional.empty();
        }
    }

    // Delete an expense by ID
    public void deleteExpense(Integer id) {
        expenseRepository.deleteById(id);
    }

    // Delete all expenses
    public void deleteAllExpenses() {
        expenseRepository.deleteAll();
    }
}
