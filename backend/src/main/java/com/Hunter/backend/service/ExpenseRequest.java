package com.Hunter.backend.service;

import java.sql.Date;

public class ExpenseRequest {
    private Integer amount;
    private Date date;
    private String description;
    private Integer userId;
    private Integer categoryId;

    // Constructors

    public ExpenseRequest() {
    }

    public ExpenseRequest(Integer amount, Date date, String description, Integer userId, Integer categoryId) {
        this.amount = amount;
        this.date = date;
        this.description = description;
        this.userId = userId;
        this.categoryId = categoryId;
    }

    // Getters and Setters

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}
