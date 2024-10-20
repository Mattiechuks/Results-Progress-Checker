"use client";

import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';

const Login: React.FC = () => {
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matricNumber === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Handle login logic here
      console.log('Matriculation Number:', matricNumber);
      console.log('Password:', password);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>Student Login - PTI Progress and Result Checker</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="matriculation-number">Matriculation Number:</label>
          <input
            className={styles.input}
            type="text"
            id="matriculation-number"
            name="matriculation-number"
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
