import React from 'react';
import DigitalClock from './DigitalClock';
import Navigation from './Navigation';

const Header = ({ currentPage, onNavigate, cartItemsCount }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo-clock-container">
            <DigitalClock />
            <div className="logo-container" onClick={() => onNavigate('gallery')}>
              <img 
                src="https://static.wikia.nocookie.net/pizzaria-freddy-fazbear/images/9/94/FE_logo_FFPS.png/revision/latest?cb=20250329112156&path-prefix=pt-br" 
                alt="Freddy Fazbear's Pizza" 
                className="logo" 
              />
            </div>
          </div>
          <Navigation 
            currentPage={currentPage} 
            onNavigate={onNavigate}
            cartItemsCount={cartItemsCount}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;