import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc2672ed-3c69-461c-9f44-7e36253f90e1/dfqacnr-274bb219-ebc2-4ba6-bb42-04cab57d3581.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9jYzI2NzJlZC0zYzY5LTQ2MWMtOWY0NC03ZTM2MjUzZjkwZTEvZGZxYWNuci0yNzRiYjIxOS1lYmMyLTRiYTYtYmI0Mi0wNGNhYjU3ZDM1ODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RxgO4bSsGUrkp46NDInXHAevwIhTGvJq38_D1Aoig4E" alt="Freddy Fazbear's Pizza Logo" />
        </div>
        
        <div className="sotm-logo">
          <img src="https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/5/53/FE_SOTM_logo.png/revision/latest?cb=20250615165843" alt="Freddy Fazbear's Pizza SOTM Logo" />
        </div>
        
        <div className="logo-attribution">
          Freddy Fazbear's Pizza logos used with permission from Scott Cawthon
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> Phone: 021-12345678</p>
            <p><i className="fas fa-envelope"></i> Email: info@fazbearpizza.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Address: Tehran, Valiasr St., No. 1234</p>
          </div>
          
          <div className="footer-section">
            <h3>Working Hours</h3>
            <p>Saturday to Wednesday: 11 AM to 11 PM</p>
            <p>Thursday and Friday: 11 AM to 12 AM</p>
            <p>Official Holidays: 12 PM to 10 PM</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Useful Links</h3>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}><i className="fas fa-home"></i> Home</a>
            <a href="#menu" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }}><i className="fas fa-pizza-slice"></i> Menu</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}><i className="fas fa-info-circle"></i> About Us</a>
            <a href="#locations" onClick={(e) => { e.preventDefault(); onNavigate('locations'); }}><i className="fas fa-map-marker-alt"></i> Locations</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }}><i className="fas fa-images"></i> Gallery</a>
            <a href="#cart" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}><i className="fas fa-shopping-cart"></i> Cart</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>All rights of this website belong to Freddy Fazbear's Pizza. © 2023</p>
          <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>Any copying is legally pursued!</p>
        </div>
        
        <div className="creator">
          <p>Created by Kian Hassani Azami</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;