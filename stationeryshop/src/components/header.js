import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartPage from '../components/cartPage';
import '../style/home.css';
import logo from '../ShopImges/logo.webp';

const Header = (props) => {
  const navigate = useNavigate();
  

  const [number ,setNumber] = useState(props.selected)

 

  return (
    <div>
      <div className="header">
        <nav>
          <ul className="navbar">
            <img className="logoImg" src={logo} alt="logo" onClick={(e) => navigate('/')} />
            <form className="search" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="searchBtn" type="submit">
                Search
              </button>
            </form>
            <li className="cartIcon">
              <Link to="/cartPage">
                <h3 className="iconNo">{number}</h3>
                <FaShoppingCart className="icon" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <Link to="/MyAccount">My Account</Link>
          </li>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Header;
