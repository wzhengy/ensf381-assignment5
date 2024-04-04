import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = ({ switchToSignup, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        setMessage('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        onLoginSuccess();
      } catch (error) {
        setMessage('Invalid username or password!');
      }
    } else {
      setMessage('All fields are required!');
    }
  };
  return (
    <div>
      {message && <div style={{color:'red'}}>{message}</div>}
    
      <form onSubmit={handleSubmit}>
        Username:
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br></br>Password:
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br><button type="submit">Login</button>
        <br></br><button type="button" onClick={switchToSignup}>Switch to Signup</button>
      </form>
    </div>
  );
};

export default LoginForm;