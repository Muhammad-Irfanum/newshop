import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/adminUi.css';
import Header from './header';
import Footer from './footer';
import Carousel from './carousel';

const AdminDashboard = () => {

  const [user, setUser ] = useState(localStorage.getItem('token'))
  return (
    user ? (
      <div>
      <Header/>
      <Carousel/>
      <div className='mainsec'>
        <div className='navigation'>
          <Link to='/' className='Link'>Home</Link>
          <Link to='/store' className='Link'>Store</Link>
          <Link to='/products' className='Link'>Products</Link>
          <Link to='/settings' className='Link'>Settings</Link>
        </div>

        <div className='dashboard'>
          <div className='dashboard-item'>
            <Link to='/adminAddItem' className='Link'>Add Product</Link>
          </div>
          <div className='dashboard-item'>
            <Link to='/MyAccoount' className='Link'>Manage Users</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    ) : (
      <h1>Please Login to Access this dashboard</h1>
    )
  );
}

export default AdminDashboard;
