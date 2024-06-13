import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Components/Cart';
import { addToCart, removeFromCart, clearCart } from '../features/cart/cartSlice';

const mockStore = configureStore([]);
const initialState = {
  cart: {
    items: [
      { id: 1, title: 'Product 1', price: 10, quantity: 2 },
      { id: 2, title: 'Product 2', price: 20, quantity: 1 },
    ],
  },
};

describe('Cart Component', () => {
  it('renders cart items and calculates total price', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    expect(screen.getByText('$40')).toBeInTheDocument();
  });

  test('handles adding and removing items correctly', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getAllByText('+')[0]);
    expect(store.getActions()).toContainEqual(addToCart(initialState.cart.items[0]));

    fireEvent.click(screen.getAllByText('-')[0]);
    expect(store.getActions()).toContainEqual(removeFromCart(initialState.cart.items[0]));

    fireEvent.click(screen.getByText(/clear cart/i));
    expect(store.getActions()).toContainEqual(clearCart());
  });
});
