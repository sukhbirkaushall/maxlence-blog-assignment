import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //get the username and password from the local storage to checkin the login details
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      onLogin();
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    // login form 
    <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='form-name'>Login Here:</h2>
      <div className="form-group">
        <label className="form-label">Username:</label>
        <input type="text" className="form-input" value={username} onChange={(e) => setUsername(e.target.value)}
          required />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)}
          required />
      </div>
      <button type="submit" className="form-button">Login</button>
    </form>
  );
};

export default Login;
