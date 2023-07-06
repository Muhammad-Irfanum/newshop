import React, { useState } from 'react';

import { loginAccount } from '../Service/api';
import '../style/login.css';

import { useNavigate  } from 'react-router-dom';

import Header from './header';

const Login = () => {               //here history is passed 
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { email, password } = login;

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login)
    try {
      // Call the addAccount function and pass the login object
      await loginAccount(login).then((res) => localStorage.setItem('token',res.data.token));
      navigate('/adminDashboard')

   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header/>
      <div className="login-container">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submitBtn"  >
        
            Login
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
