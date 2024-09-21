import React from 'react';
import './Products.css';

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    image: "http://picsum.photos/200/300?random=1",
    price: 10,
  },
  {
    id: 2,
    name: "Burger",
    image: "http://picsum.photos/200/300?random=2",
    price: 5,
  },
  {
    id: 3,
    name: "Sandwich",
    image: "http://picsum.photos/200/300?random=3",
    price: 7,
  },
 
];

const Products = () => {
  return (
   
   <section className="products-section">
     <h2 id='title'>Available Food Items</h2>
       <div className="product-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
