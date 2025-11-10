import React from 'react';

const Navigation = ({ currentPage, onNavigate, cartItemsCount }) => {
  return (
    <nav>
      <ul>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#menu" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }}><i className="fas fa-pizza-slice"></i> Menu</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}><i className="fas fa-info-circle"></i> About Us</a></li>
        <li><a href="#locations" onClick={(e) => { e.preventDefault(); onNavigate('locations'); }}><i className="fas fa-map-marker-alt"></i> Locations</a></li>
        <li><a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }}><i className="fas fa-images"></i> Gallery</a></li>
        <li><a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}><i className="fas fa-shopping-cart"></i> Cart ({cartItemsCount})</a></li>
      </ul>
      <a href="#order" className="btn btn-yellow" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }}><i className="fas fa-shopping-cart"></i> Order Online</a>
    </nav>
  );
};

export default Navigation;