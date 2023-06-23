import React, { useState} from 'react';
import '../style/MyAccount.css';
import Header from './header';
import Footer from './footer';
import { addAccount } from "../Service/api";

const MyAccount = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const { email, password } = login;

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the addAccount function and pass the login object
      await addAccount(login);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Header />

      <div className="login-container">
        <h2>Login to my Account</h2>
        <h6>Enter Your email and password</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email" // Add the name attribute to the input field
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password" // Add the name attribute to the input field
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
