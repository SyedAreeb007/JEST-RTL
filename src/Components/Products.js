import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch clothing products from Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/women\'s clothing');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <h1 className="products-heading">Clothing Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
            </div>
            <p className="product-price">${product.price}</p>
            <Button variant="outline-success" onClick={() => handleAddToCart(product)}>
              <FaShoppingCart /> Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
