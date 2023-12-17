import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Signup from './registration/Signup';
import Signin from './registration/Signin';
import Home from './UserComponent';

const App = () => {
  // Use state to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use effect to check if the user is logged in when the component mounts
  useEffect(() => {
    // Check local storage or make a backend API call to determine login status
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login and update isLoggedIn state
  const handleLogin = () => {
    setIsLoggedIn(true);
    // You may also want to store authentication token in local storage or a secure cookie
    // to persist the login state across page reloads
    // localStorage.setItem('authToken', 'yourAuthToken');
  };

  // Function to handle logout and update isLoggedIn state
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken'); // Clear authentication token
    // Clear authentication token from local storage or cookie
    // localStorage.removeItem('authToken');
  };

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route
            exact
            path="/"
            render={() => (isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />)}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Navigate to="/" /> : <Signin onLogin={handleLogin} />)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
