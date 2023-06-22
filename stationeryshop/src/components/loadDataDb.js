import React from 'react'

const LoadData = () => {

    const loadProduct = (e) => {
        e.preventDefault();
        STORE_DATA.map((item) => {
          let formData = {
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image,
            allImages: item.allImages,
            category: item.category,
            quantity: item.quantity,
            collection: item.collection,
            rating: item.rating,
            sale: item.sale,
            featured: item.featured,
          };
          addProducts(formData);
        });
      };
  return (
    <div>
            <button onClick={loadProduct}>Load Product Data</button>
    </div>
  )
}

export default LoadData;
