import React, { useState } from 'react';
import { addProduct } from '../Service/api';
import '../style/adminAdditem.css'; // Import the CSS file

function AddProductForm() {
  const [formProduct, setFormProduct] = useState({
    title: "",
    brand: "",
    type: "",
    description: "",
    price: 0,
    src: "",
    collection: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    alert("Product added");
    console.log(formProduct)
    addProduct(formProduct);
  };

  return (
    <div>
      <div className='heading'>Add New Product</div>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formProduct.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formProduct.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formProduct.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formProduct.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formProduct.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="src">Image Source:</label>
          <input
            type="text"
            id="src"
            name="src"
            value={formProduct.src}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collection">Collection:</label>
          <input
            type="text"
            id="collection"
            name="collection"
            value={formProduct.collection}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="add-button">Add Product</button> {/* Add the button element with the appropriate CSS class */}
      </form>
    </div>
  );
}

export default AddProductForm;
