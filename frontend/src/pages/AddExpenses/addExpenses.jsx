import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './addExpenses.css';
import Navbar from '../../Context/navbar';
import validate from '../../Context/validation';
import GetExpenseCategory from './getExpenseCategories'


const AddExpense = ({ user_id }) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category_id, setCategoryID] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();


    const handleAddExpense = async () => {
        try {
            // Ensure that amount, date, and category are not empty before making the request
            if (!amount || !date || !category_id || !description) {
                console.error('Please fill in all fields');
                return;
            }

            const newExpense = {
                userId: parseInt(user_id),
                amount: parseFloat(amount),
                date: date,
                categoryId: parseInt(category_id),
                description: description
            };

            const response = await axios.post('http://localhost:8080/api/expensesWithUserAndCategory', newExpense);

            console.log('Expense added successfully:', response.data);

            console.log(newExpense);
            // You can perform additional actions after successfully adding an expense

            // Clear the form fields after successful submission
            setAmount('');
            setDate('');
            setCategoryID('');
            setDescription('');

            navigate('/');


        } catch (error) {
            console.error('Error adding expense:', error.response.data);
        }
    };
    return (
        <>
            <Navbar isLoggedin={validate()} username={localStorage.getItem("username")} />
            <div className="fromWrapper">
                <h2>Enter Your Expense</h2>
                <form onSubmit={handleAddExpense}>
                    <div>
                        <label>Amount:</label>
                        <br />
                        <input type="number"
                            name="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label>Date:</label>
                        <br />
                        <input type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label>Category:</label>
                        <br />
                        <select value={category_id} onChange={(e) => setCategoryID(e.target.value)}>
                            {/* <option value="">Select a category</option>
                            <option key={1} value={10}>
                                option
                            </option> */}
                            {
                                <GetExpenseCategory />
                            }
                        </select>
                    </div>

                    <div>
                        <label>Description:</label>
                        <br />
                        <input type="text"
                            name="date"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                    </div>
                    <div>
                        <button id="sub_btn" type="button" onClick={handleAddExpense}>Add Expense</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddExpense;
