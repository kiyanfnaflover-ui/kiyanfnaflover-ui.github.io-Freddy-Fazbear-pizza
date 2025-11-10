import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <section className="page" id="home-page">
      <div className="hero">
        <div className="container">
          <h1>FREDDY FAZBEAR'S PIZZA</h1>
          <p>Delicious pizzas with unique flavors in a fun and friendly environment for the whole family. Serving you since 1983!</p>
          <div className="hero-buttons">
            <button className="btn" onClick={() => onNavigate('menu')}>View Menu</button>
            <button className="btn btn-yellow" onClick={() => onNavigate('locations')}>Our Locations</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;