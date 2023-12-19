import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (event) => {

    event.preventDefault(); // Prevent the default form submission behavior

    // Perform the signup logic using Axios and backend API
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        username,
        password,
        email
      });

      console.log(response.data);

      if (response.status === 201) {
        console.log('Signup successful!');
        navigate("/"); // Redirect user to Home Page
      } else {
        console.error('Signup failed');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signupWrapper">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username</label><br />
          <input type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required />
        </div>

        <div>
          <label>Email address</label><br />
          <input type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required />
        </div>

        <div>
          <button id="sub_btn" type="submit">Register</button>
        </div>

      </form>
      <footer>
        <p><Link to="/">Back to Homepage</Link>.</p>
      </footer>
    </div>
  );
};

export default Signup;
