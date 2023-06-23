import React, { useState } from 'react';
import p1 from '../ShopImges/p1.webp';
import p2 from '../ShopImges/p2.webp';
import p3 from '../ShopImges/p3.webp';

const Carousel = () => {
  const [images] = useState([p1, p2, p3]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <button 
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button style={{backgroundColor:"transparent"}}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange((activeIndex - 1 + images.length) % images.length)
          }
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{backgroundColor:"transparent"}}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
