import { createContext, useEffect, useState } from "react";
import PRODUCTS_DATA from '../ShopImges/productsData.js';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cards, setCards] = useState(PRODUCTS_DATA);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/product');
        setCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const value = { cards, setCards, cartItems, setCartItems };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
