import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './signin.css';


const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const handleSignin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:8080/api/signin', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Singin successful");
        const data = response.data;
        console.log(data);
        localStorage.setItem('authToken', data.id);
        localStorage.setItem('username', data.username);

        navigate("/");
        window.location.reload(false);

      } else {
        console.error('Signin failed');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <>
      <div className="loginWrapper">
        <h2>Sign in with us</h2>
        <form onSubmit={handleSignin}>
          <div>
            <label>Username</label>
            <br />
            <input type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>

          <div>
            <button id="sub_btn" type="submit" >Login</button>
          </div>

        </form>

        <footer>
          <p>First time? <Link to="/signUp">Create an account</Link>.</p>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </>
  );
};

export default Signin;
