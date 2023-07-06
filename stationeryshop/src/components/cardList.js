import React, { useState, useContext, useEffect } from 'react';
import '../style/cardList.css';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../contexts/Products.context';
import Header from './header';
import Footer from './footer';
import { getProducts } from '../Service/api';

const CardList = (props) => {
  const { cards } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const location = useLocation();
  const page = location.state;

  console.log(cards[1].src);

  return (
    <div>
      <Header />
      <div className='cardList'>
        {cards.map((card) => (
          card.type === page && (
            <div key={card.id} className='card-wrapper'>
              <div className='card'>
                <img src={card.src} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Rs: {card.price}</h5>
                  <h5 className='card-title'>{card.title}</h5>
                  <p className='card-text'>{card.description}</p>
                  <button onClick={() => props.selection(card.id)}>
                    <Link to='/addCart' className='linkbtn'>
                      Check It
                    </Link>
                  </button>
                  <button>
                    <Link to='/payment' className='linkbtn'>
                      Pay Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CardList;
