import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseComponent = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend
    axios.get('http://localhost:8080/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.expenseId}>{expense.amount} - {expense.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseComponent;
