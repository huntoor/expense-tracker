import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import Signin from './pages/SignIn/Signin';
import Signup from './pages/SignUp/Signup';
import Home from './pages/Home/Home';
import validate from './Context/validation';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {
            validate() ?
              <Route path='/' element={<Home />} />
            : <Route path='/' element={<Signin />} />
          }
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
