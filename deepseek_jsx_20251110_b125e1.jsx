import React, { useState } from 'react';

const Cart = ({ cart, onUpdateItem, onRemoveItem, onClearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.phone) {
      alert('Please fill in all fields to place your order.');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty. Please add some pizzas before placing an order.');
      return;
    }

    setOrderPlaced(true);
    onClearCart();
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="page cart-section">
        <div className="container">
          <h2 className="section-title">YOUR ORDER</h2>
          <div className="cart-container">
            <div className="empty-cart-message">
              <p>Your cart is empty. Add some delicious pizzas from our menu!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page cart-section">
      <div className="container">
        <h2 className="section-title">YOUR ORDER</h2>
        <div className="cart-container">
          {!orderPlaced ? (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn decrease-btn"
                          onClick={() => onUpdateItem(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn increase-btn"
                          onClick={() => onUpdateItem(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        className="btn remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-total">
                Total: ${total.toFixed(2)}
              </div>
              
              <div className="checkout-form">
                <h3>Complete Your Order</h3>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number" 
                  />
                </div>
                <button 
                  className="btn btn-yellow"
                  onClick={handlePlaceOrder}
                  style={{width: '100%'}}
                >
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <div className="order-success">
              <i className="fas fa-pizza-slice"></i>
              <img 
                src="https://www.pngall.com/wp-content/uploads/14/FNAF-PNG-Image.png" 
                alt="Freddy Fazbear" 
                style={{maxWidth: '150px', margin: '10px auto'}} 
              />
              <h3>Thank You for Your Order!</h3>
              <p>Your pizza will be delivered to you soon!</p>
              <p>سریع به دست شما می‌رسد</p>
              <p>Enjoy your meal from Freddy Fazbear's Pizza!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;