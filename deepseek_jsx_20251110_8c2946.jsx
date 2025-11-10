import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Button from '../Common/Button';

const Menu = ({ onAddToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: "Special Pepperoni Pizza",
      description: "Spicy pepperoni, mozzarella cheese, and homemade tomato sauce with a blend of Fazbear's secret spices!",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 2,
      name: "Fazbear's Mixed Pizza",
      description: "Mushrooms, olives, bell peppers, pepperoni, and mozzarella cheese with Freddy's special sauce!",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken, BBQ sauce, onions, and cheddar cheese with a smoky and delicious flavor!",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 4,
      name: "Fresh Vegetable Pizza",
      description: "Mushrooms, bell peppers, tomatoes, olives, and cheese with fresh tomato sauce!",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      id: 5,
      name: "Freddy's Special Drink",
      description: "A delicious and energizing drink with Freddy's special flavor!",
      price: 16.99,
      image: "https://u-mercari-images.mercdn.net/photos/m82817801586_1.jpg?width=2560&quality=75&_=1756057438"
    }
  ];

  return (
    <section className="page menu-section">
      <div className="container">
        <SectionTitle>OUR PIZZA MENU</SectionTitle>
        <div className="menu-items">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">${item.price.toFixed(2)}</span>
                <Button 
                  className="add-to-cart"
                  onClick={() => onAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;