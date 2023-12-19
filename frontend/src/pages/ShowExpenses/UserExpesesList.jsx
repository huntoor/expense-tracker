import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserExpesesList = ({ userID }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  // useEffect(() => {
  //   // Fetch expense categories from the backend
  //   axios.get('http://localhost:8080/api/expense-categories')
  //     .then(response => setCategories(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  // useEffect(() => {
  //   // const fetchExpenses = async () => {
  //   //   try {
  //   //     const response = await axios.get(`http://localhost:8080/api/userExpense/${userID}`);
  //   //     setExpenses(response.data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching expenses:', error.response.data);
  //   //   }
  //   // };

  //   // fetchExpenses();
  //   axios.get(`http://localhost:8080/api/userExpense/${userID}`)
  //   .then(response => setCategories(response.data))
  //   .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/userExpense/${userID}`)
      .then(response => {
        setExpenses(response.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch(error => console.error(error));
  }, [userID]);


  const deleteExpense = (expenseId) => {
    // Send a DELETE request to the backend to delete the expense
    axios.delete(`http://localhost:8080/api/expenses/${expenseId}`)
      .then(response => {
        // Remove the deleted expense from the state
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense.expenseId !== expenseId));
      })
      .catch(error => console.error(error));
  };

  // Render a loading message or indicator while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Check if expenses array is empty
  if (expenses.length === 0) {
    return (
      <>
        <div></div>
        <div className='noExpense'><p>No expenses to display</p></div>
      </>
    );
  }
  return (
    <>
      {console.log(expenses)}

      {
        expenses.map((expense) => {
          const inputDate = expense.date;
          const formattedDate = new Date(inputDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

          return (
            <div className="expense" key={expense.expenseId}>
              <p className='catigoryTitle'><b>{expense.category.categoryName}</b></p>
              <div className='expenseDetails'>
                <p><b>Amount:</b> {expense.amount}</p>
                <p><b>Date:</b> {formattedDate}</p>
                <p><b>Description:</b> {expense.description}</p>
              </div>
              <div className='btns'>
                <button className="editBtn btn">
                  Edit
                </button>
                <button className="deleteBtn btn" onClick={() => deleteExpense(expense.expenseId)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })
      }

    </>
  );
};

export default UserExpesesList;
