import React, { useState } from 'react';
import axios from 'axios';
import '../style/payment.css';
import Header from './header';
import Footer from './footer';


const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [orderId, setOrderId] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/process-payment', { amount, orderId });
      const { message, paymentUrl, error: responseError } = response.data;

      if (message) {
        setPaymentUrl(paymentUrl);
        setError('');
      } else if (responseError) {
        setError(responseError);
        setPaymentUrl('');
      }
    } catch (error) {
      setError('An error occurred');
      setPaymentUrl('');
    }
  };

  return (
    <div>
        <Header/>
       
         <div className="payment-page">
      <h1>Payment Here</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" name="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label htmlFor="orderId">Order ID:</label>
          <input type="text" id="orderId" name="orderId" value={orderId} onChange={handleOrderIdChange} />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      {paymentUrl && (
        <div>
          <p>Payment request successful!</p>
          <p>Payment URL: <a href={paymentUrl} target="_blank" rel="noopener noreferrer">{paymentUrl}</a></p>
        </div>
      )}
      {error && (
        <div>
          <p>An error occurred: {error}</p>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default PaymentPage;