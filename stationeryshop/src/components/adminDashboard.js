import React from 'react'
import adminUi from '../style/adminUi.css';
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
          <div className='navigation'>
    <Link className="Link">Home</Link>
      <Link className="Link">Store</Link>
      <Link className="Link">Products</Link>
      <Link className="Link">Setting</Link>
    </div>

    <div className='dishboard'>
        
    </div>
    </div>
  )
}

export default AdminDashboard
