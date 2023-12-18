import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetExpenseCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch expense categories from the backend
        axios.get('http://localhost:8080/api/expense-categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <option value="">Select a category</option>
            {categories.map((cat) => (
                <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                </option>
            ))}
        </>
    );
};

export default GetExpenseCategory;
