import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // store the username and password to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('User registered successfully');

    // store the username and password back to empty
    setUsername('')
    setPassword('')
  };

  return (
    // form to register user 
    

    <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='form-name'>Register Here:</h2>
      <div className="form-group">
        <label className="form-label">Username:</label>
        <input
          type="text"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="form-button">Register</button>
    </form>
  );
};

export default Register;
