import { useState } from 'react';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import ProductList from './ProductList';
import { cartReducer, addItem, updateQuantity, removeItem } from './CartSlice';
import './App.css';

const HomePage = ({ setCurrentView }) => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content-left">
          <h1>
            Welcome To <span>Paradise Nursery</span>
          </h1>
          <div className="divider" />
          <p className="tagline">Where Green Meets Serenity</p>
          <button type="button" className="get-started" onClick={() => setCurrentView('plants')}>
            Get Started
          </button>
        </div>

        <div className="hero-content-right">
          <h3>Welcome to Paradise Nursery, where green meets serenity!</h3>
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer to you.
            Our mission is to provide a wide range of high-quality plants that not only
            enhance the beauty of your surroundings but also contribute to a healthier
            and more sustainable lifestyle.
          </p>
          <p>
            Our team of experts is dedicated to ensuring that each plant meets our strict
            standards of quality and care. Whether you’re a seasoned gardener or just
            starting your green journey, we’re here to support you every step of the way.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit Paradise
            Nursery today and experience the beauty of nature right at your doorstep.
          </p>
        </div>
      </section>

      <AboutUs />
    </div>
  );
};

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cartState, setCartState] = useState({ items: [] });

  const dispatchCartAction = (type, payload) => {
    setCartState((previousState) => cartReducer(previousState, { type, payload }));
  };

  const handleAddToCart = (product) => {
    dispatchCartAction('addItem', product);
  };

  const handleUpdateQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      dispatchCartAction('removeItem', itemName);
      return;
    }
    dispatchCartAction('updateQuantity', { name: itemName, quantity });
  };

  const handleRemoveItem = (itemName) => {
    dispatchCartAction('removeItem', itemName);
  };

  return (
    <div className="app-shell">
      {currentView === 'home' && <HomePage setCurrentView={setCurrentView} />}
      {currentView === 'plants' && (
        <ProductList
          setCurrentView={setCurrentView}
          cartItems={cartState.items}
          onAddToCart={handleAddToCart}
        />
      )}
      {currentView === 'cart' && (
        <CartItem
          cartItems={cartState.items}
          onContinueShopping={(view = 'plants') => setCurrentView(view)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
}

export default App;
