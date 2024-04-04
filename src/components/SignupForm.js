import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignupForm = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (username && password && confirmPassword && email) {
        if (password === confirmPassword) {
          try {
            const response = await axios.post('http://localhost:5000/register', { username, password, email });
            setMessage('Signup successful!');
          } catch (error) {
            setMessage('Username already exists');
        }
        } else {
          setMessage('Passwords do not match!');
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
          <br></br>Confirm Password:
          <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <br></br>Email:
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br><button type="submit">Signup</button>
          <br></br><button type="button" onClick={switchToLogin}>Switch to Login</button>
        </form>
      </div>
    );
  };

export default SignupForm;