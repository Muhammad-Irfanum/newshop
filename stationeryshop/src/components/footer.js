import React from 'react'

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "rgb(87, 143, 145)"
    }}>

      <div className="container">
        <footer>
          <div className="row">
            <div className="about">
              <h5>ABOUT THE SHOP</h5>
              <div className="para">
                <p>We offer a diverse selection of stationery, office, and school supplies, as well as
                  gift and packaging products. Our inventory is carefully curated
                  to provide the best quality and value for all your business and personal needs.</p>
              </div>
            </div>
            <div className='item'>
              <div className="customer">
                <h5>Customer service</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Exchange</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Return</a></li>
                </ul>
              </div>
              <div className="menu">
                <h5>MAIN MENU</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our collection</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Latest Deals</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stationery</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Books</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="email">
                <form>
                  <h5>Our newsletter</h5>
                  <p>Your one shop for all your stationery needs</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn1" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="company">
            <p>© 2023 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div >
  )
}

export default Footer
