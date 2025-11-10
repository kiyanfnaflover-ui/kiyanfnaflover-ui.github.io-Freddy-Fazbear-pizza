import React, { useState, useEffect } from 'react';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Menu from './components/Pages/Menu';
import About from './components/Pages/About';
import Locations from './components/Pages/Locations';
import Gallery from './components/Pages/Gallery';
import Cart from './components/Pages/Cart';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'menu':
        return <Menu onAddToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'locations':
        return <Locations />;
      case 'gallery':
        return <Gallery />;
      case 'cart':
        return <Cart 
          cart={cart} 
          onUpdateItem={updateCartItem} 
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
        />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="App">
      {isLoading && <LoadingOverlay />}
      <div className="fnaf-ambience"></div>
      
      <Header currentPage={currentPage} onNavigate={navigateTo} cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;