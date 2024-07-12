import React from 'react';
import { useDispatch } from 'react-redux';
import macetapequena from '../assets/macetapequena.png';
import maceta1 from '../assets/maceta1.png';
import maceta2 from '../assets/maceta2.png'; 
import maceta3 from '../assets/maceta3.png'; 
import { addToCart } from '../features/cart/cartSlice'; 
import './home.css';

const Home = () => {
  const dispatch = useDispatch();

  const featuredProducts = [
    { id: 1, title: 'pot', price: 49.99, image: macetapequena },
    { id: 2, title: 'middle pot', price: 29.99, image: maceta1 },
    { id: 3, title: 'Little pot', price: 19.99, image: maceta2 },
    { id: 4, title: 'another pot', price: 39.99, image: maceta3 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Our Store</h1>
        <p>Discover our featured products</p>
      </div>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
