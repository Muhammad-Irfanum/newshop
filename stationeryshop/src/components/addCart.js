import React, { useReducer, useMemo, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../style/addCart.css';
import '../style/footer.css';
import Footer from './footer';
import Header from './header';
import { ProductContext } from '../contexts/Products.context';

// Reducer function
const quantityReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      if (state > 1) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
};

const Cart = ({ selected }) => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [quantity, dispatch] = useReducer(quantityReducer, 1);

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  // Memo hook
  const totalPrice = useMemo(() => {
    return selected.price * quantity;
  }, [selected.price, quantity]);

  // UseNavigate
  const navigate = useNavigate();

  // UseRef
  const quantityRef = useRef(quantity);

  // useEffect
  useEffect(() => {
    quantityRef.current = quantity;
  }, [quantity]);

  const addToCart = () => {
    const itemToAdd = {
      ...selected,
      quantity: quantityRef.current,
    };
    setCartItems((prevItems) => [...prevItems, itemToAdd]);
  };

  return (
    <div>
      <Header />
      <div className="card" style={{ width: '3rem' }}>
        <div className="cart">
          <div>
            <div>
              <h2>{selected.title}</h2>
            </div>
            <div className="brandname">
              <div>
                <h3>Brand: {selected.brand}</h3>
              </div>
              <div>
                <h3>Model: {selected.id}</h3>
              </div>
            </div>
            <hr />
            <div className="price">
              <div>
                <h2>Price: {totalPrice}</h2>
              </div>
              <hr />
              <div className="quntity">
                <h2>Quantity: {quantity}</h2>
                <button onClick={handleIncrease} className="addBtn">
                  +
                </button>
                <button onClick={handleDecrease} className="deleteBtn">
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="butnsec">
            <div>
              <button className="b1" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
            <div>
              <button
                className="b2"
                onClick={(e) => navigate('/CheckOutForm')}
              >
                Buy it Now
              </button>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={selected.src} alt={selected.title} style={{ width: '25rem' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
