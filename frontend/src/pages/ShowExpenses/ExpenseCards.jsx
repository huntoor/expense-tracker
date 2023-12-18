import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch expense categories from the backend
    axios.get('http://localhost:8080/api/expense-categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="expense">
        <p className='catigoryTitle'><b>title</b></p>
        <div className='expenseDetails'>
          <p><b>Amount:</b> amountSpend</p>
          <p><b>Date:</b> 31-4-2023</p>
          <p><b>Description:</b> Lorem ipsum dolor sit. lorem</p>
        </div>
        <button className="editBtn">
          Edit
        </button>
      </div>
    </>
  );
};

export default ExpenseCards;
