import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseCategoryComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch expense categories from the backend
    axios.get('http://localhost:8080/api/expense-categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Expense Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.categoryId}>{category.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCategoryComponent;
