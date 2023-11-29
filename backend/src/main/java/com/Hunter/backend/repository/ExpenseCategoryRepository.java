package com.Hunter.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Hunter.backend.model.ExpenseCategory;

import java.util.List;

public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Integer> {
    // Custom query to find expense categories by name containing
    List<ExpenseCategory> findByCategoryNameContaining(String categoryName);
}
