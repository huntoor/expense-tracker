import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';
import Navbar from '../../Context/navbar';
import validate from '../../Context/validation';
import UserExpesesList from '../ShowExpenses/UserExpesesList';


const Home = () => {

  return (
    <>
      <Navbar isLoggedin={validate()} username={localStorage.getItem("username")} />
      <div className="expenseSection">
        <div className="expenseTitle">
          <h1>Your Expenses</h1>
        </div>

        <div className="expenses">
          <UserExpesesList userID={localStorage.getItem("authToken")}/>
          {/* <div className="expense">
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
          </div> */}

        </div>

        <div className="interaction">
          <Link to="/addExpense">Add Expense</Link>
          <Link to="/showDetails">Show Details</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
