import React, { useContext, useEffect } from 'react';
import '../style/cartpage.css';
import Header from './header';
import Footer from './footer';
import { ProductContext } from '../contexts/Products.context';

function CartPage() {
  const [cartItems, setCartItems] = useContext(ProductContext);

  useEffect(() => {
    if (!Array.isArray(cartItems)) {
      setCartItems([]);
    }
  }, [cartItems]);

  const incrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  if (!Array.isArray(cartItems)) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      <Header />
      <div className="cartPage">
        <div className="cart-page">
          <h1 className="title">Your Choices</h1>

          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>Rs.{item.price}</td>
                  <td>
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    {item.quantity}
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </td>
                  <td>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
