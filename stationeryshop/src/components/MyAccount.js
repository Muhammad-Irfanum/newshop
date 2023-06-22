import React, { useState, useEffect} from 'react';
import '../style/MyAccount.css';
import Header from './header';
import Footer from './footer';
import{addAccount} from "../Service/api";

const MyAccount = () => {

  const [login, setLogin] = useState({
    email: "",
    password:""
  })

  const {email , password} = login;

  const handleChange = (e)=>{
    setLogin({...login, [e.target.name]: e.target.value})
  }
  
  const submitbtn = async(e)=>{
    e.preventDefault();
    try{
     await  addAccount(login);
  } catch(error){
    console.log(error);
  }
}
  
 

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);



  return (
    <div>
      <Header />

      <div className="login-container">
        <h2>Login to my Account</h2>
        <h6>Enter Your email and password</h6>
        <form >
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              placeholder="Email"
             
              onChange={e=>handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
             
            />
          </div>
          <button type="submit" className="submitBtn"
          onClick={submitbtn}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
