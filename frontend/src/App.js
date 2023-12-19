import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Signin from './pages/SignIn/Signin';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';
import validate from './Context/validation';
import AddExpense from './pages/AddExpenses/addExpenses';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* {
            validate() ?
              <Route path='/' element={<Home />} />
            : <Route path='/' element={<Signin />} />
          }
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addExpense' element={<AddExpense user_id={localStorage.getItem('authToken')} />} /> */}
          {/* {
            validate() ?
              <>
                <Route path='/' element={<Home />} />
                <Route path='/addExpense' element={<AddExpense user_id={localStorage.getItem('authToken')} />} />              </>
              :
              <>
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
              </>
          } */}
          {
          validate() ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/addExpense" element={<AddExpense user_id={localStorage.getItem('authToken')} />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Navigate to="/signin" />
                  </>
                }
              />
              <Route path="/addExpense" element={<Navigate to="/signin" />} />
            </>
          )}

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
