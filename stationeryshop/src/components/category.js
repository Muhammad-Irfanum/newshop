import { useState, useEffect } from "react";
import "../style/category.css";
import '../style/footer.css';
import { Link } from "react-router-dom";
import { getProducts } from "../Service/api";

const Category = (props) => {
  const [ setShowMore] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      console.log(productsData)
      setProducts(productsData)
    };

    fetchProducts();
  }, []);

 
  
  // Filter the products based on the selected collection names
  const filteredObjects = products.filter(
    (item) => (
      item.collection === "pen" ||
      item.collection === "Colorpaper" ||
      item.collection === "Brushes" ||
      item.collection === "Lunch Box" ||
      item.collection === "Books" ||
      item.collection === "Desk"
    )
  );

  return (
    <div className="collection-container">
      <h2>Our Collection</h2>
      <div className="collection">
        {
          filteredObjects.map((item) => (
            <div key={item._id} className="card">
              <img src={item.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <button className="Detailbtn">
                  <Link to='/cardList' className="viewBtnlink" state={item.collection}>
                    View More
                  </Link>
                </button>
              </div>
            </div>
          ))
        }
      </div>
   
    </div>
  );
};

export default Category;
