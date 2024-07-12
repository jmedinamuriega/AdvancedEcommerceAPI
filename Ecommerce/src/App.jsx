import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductForm from './components/ProductManagement/ProductForm';
import ProductList from './components/ProductManagement/ProductList';
import ProductDetails from './components/ProductManagement/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<UserManagement />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
