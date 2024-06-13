import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../features/cart/cartSlice'; // Import addToCart action
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Cart.css'; // Import your custom styles

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price of an item
  const calculateItemTotal = item => {
    return item.price * item.quantity;
  };

  // Calculate overall total price of the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">
        <FaShoppingCart /> Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <span className="item-price">${item.price}</span>
                  <div className="quantity-controls">
                    <button
                      className="btn-quantity"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      -
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      className="btn-quantity"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="item-total">${calculateItemTotal(item)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <button className="btn-clear" onClick={handleClearCart}>
              Clear Cart
            </button>
            <div className="cart-total">
              <span>Total:</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <Link to="/checkout" className="checkout-link">
              Go to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
