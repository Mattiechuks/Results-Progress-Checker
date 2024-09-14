import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Handle admin login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login - PTI Progress and Result Checker</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>
        <div className="links">
            <a href="/">Home</a>
            <a href="/forgot-password">Forgotten Password?</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
