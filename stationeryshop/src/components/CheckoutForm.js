import { useState, useEffect } from "react";
 import "../style/CheckoutForm.css"; 
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
const CheckoutForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(e => {
    
    console.log(firstName,lastName, email,address,city,
                country,zipCode); }, [
                firstName,
                lastName,
                email,
                address,
                city,
                country,
                zipCode ]);

  const handleSubmit = (e,setter) => {
        setter(e.currentTarget.value)
    e.preventDefault();
   
  };

  return (
    <div>
      <Header/>
    <div className="checkout-form-container">
      <h2>Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={e =>handleSubmit(e, setFirstName)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={e =>handleSubmit(e, setLastName)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e =>handleSubmit(e, setEmail)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={e =>handleSubmit(e, setAddress)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={e =>handleSubmit(e, setCity)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={e =>handleSubmit(e, setCountry)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={e =>handleSubmit(e, setZipCode)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
        <button type="" className="paymentbutton">
  <Link to="/payment">Pay Now</Link>
</button>

      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default CheckoutForm;
