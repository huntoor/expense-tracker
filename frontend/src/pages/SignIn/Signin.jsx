import React, { useState } from 'react';

const Signin = ({ onSignin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        onSignin(); // Notify the parent component (App.js) about the successful signin
      } else {
        console.error('Signin failed');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <form>
        {/* ... (your form inputs) */}
        <button type="button" onClick={handleSignin}>
          Signin
        </button>
      </form>
    </div>
  );
};

export default Signin;
