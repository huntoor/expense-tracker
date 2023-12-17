import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import Signin from './pages/SignIn/Signin';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route
            exact
            path="/"
            render={() => (isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />)}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Navigate to="/" /> : <Signin onLogin={handleLogin} />)}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
