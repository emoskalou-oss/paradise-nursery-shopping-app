const CartItem = ({ cartItems, onContinueShopping, onUpdateQuantity, onRemoveItem }) => {
  const cart = cartItems;

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.cost.substring(1));
      total += price * item.quantity;
    });
    return total;
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return price * item.quantity;
  };

  const handleIncrement = (item) => {
    onUpdateQuantity(item.name, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.name, item.quantity - 1);
    } else {
      onRemoveItem(item.name);
    }
  };

  const handleRemove = (itemName) => {
    onRemoveItem(itemName);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page">
      <header className="top-nav">
        <div className="brand-block">
          <div className="brand-mark">🌿</div>
          <div>
            <h1>Paradise Nursery</h1>
            <span>Where Green Meets Serenity</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <button type="button" onClick={() => onContinueShopping('home')}>Home</button>
          <button type="button" onClick={() => onContinueShopping('plants')}>Plants</button>
          <button type="button" className="active">Cart</button>
        </nav>

        <div className="cart-header-icon" role="button" tabIndex={0}>
          <span className="cart-badge">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          <span className="cart-icon">🛒</span>
        </div>
      </header>

      <div className="cart-header">
        <h2>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item-card" key={item.name}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-price">{item.cost}</p>
                <div className="quantity-controls">
                  <button type="button" onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p className="item-total">Total: ${calculateTotalCost(item).toFixed(2)}</p>
                <button type="button" className="delete-button" onClick={() => handleRemove(item.name)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button type="button" className="primary-button" onClick={() => onContinueShopping('plants')}>
          Continue Shopping
        </button>
        <button type="button" className="primary-button" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
