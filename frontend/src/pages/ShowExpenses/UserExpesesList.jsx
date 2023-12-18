import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserExpesesList = ({ userID }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/userExpense/${userID}`);
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error.response.data);
      }
    };

    fetchExpenses();
  }, [userID]);

  return (
    <div>
      <h2>Expenses for User ID: {userID}</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.expenseId}>
            Amount: {expense.amount}, Date: {expense.date}, Category: {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserExpesesList;
