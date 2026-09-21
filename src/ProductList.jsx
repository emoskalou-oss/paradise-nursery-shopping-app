import { useState } from 'react';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Produces oxygen at night and filters common indoor pollutants.', cost: '$15' },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80', description: 'Removes formaldehyde and helps keep air fresh indoors.', cost: '$12' },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80', description: 'Improves air quality and adds a calming tropical look.', cost: '$18' },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80', description: 'Easy-care succulent known for soothing plant benefits.', cost: '$16' },
      { name: 'Areca Palm', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80', description: 'A bright, airy plant that adds humidity to the room.', cost: '$24' },
      { name: 'Bamboo Palm', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80', description: 'Elegant foliage that helps create a cleaner living space.', cost: '$22' },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80', description: 'Thrives in low light and needs very little attention.', cost: '$22' },
      { name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80', description: 'Highly resilient and ideal for shaded rooms.', cost: '$25' },
      { name: 'Pothos', image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?auto=format&fit=crop&w=800&q=80', description: 'A trailing vine that adapts beautifully to indoor spaces.', cost: '$14' },
      { name: 'Dracaena', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Strong foliage with a vertical shape perfect for corners.', cost: '$20' },
      { name: 'English Ivy', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80', description: 'Flexible trailing plant ideal for shelves and baskets.', cost: '$17' },
      { name: 'Lucky Bamboo', image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80', description: 'Easygoing and elegant with a calm, zen look.', cost: '$19' },
    ],
  },
  {
    category: 'Pet Friendly Plants',
    plants: [
      { name: 'Parlor Palm', image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80', description: 'Soft, lush leaves that create a calm indoor atmosphere.', cost: '$20' },
      { name: 'Calathea Orbifolia', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80', description: 'Beautiful patterned foliage with a gentle tropical feel.', cost: '$17' },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80', description: 'Lush green fronds that help humidify the home.', cost: '$19' },
      { name: 'Prayer Plant', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80', description: 'Displays colorful patterned leaves that move daily.', cost: '$21' },
      { name: 'Maranta', image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?auto=format&fit=crop&w=800&q=80', description: 'Statement foliage that adds texture and motion indoors.', cost: '$18' },
      { name: 'Polka Dot Plant', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Colorful, playful foliage that brightens any corner.', cost: '$15' },
    ],
  },
];

const ProductList = ({ setCurrentView, cartItems = [], onAddToCart }) => {
  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = (cartItems || []).reduce((total, item) => total + Number(item.quantity || 0), 0);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="products-page">
      <header className="top-nav">
        <div className="brand-block">
          <div className="brand-mark">🌿</div>
          <div>
            <h1>Paradise Nursery</h1>
            <span>Where Green Meets Serenity</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <button type="button" onClick={() => setCurrentView('home')}>Home</button>
          <button type="button" className="active">Plants</button>
          <button type="button" onClick={() => setCurrentView('cart')}>Cart</button>
        </nav>

        <div className="cart-header-icon" onClick={() => setCurrentView('cart')} role="button" tabIndex={0}>
          <span className="cart-badge">{totalQuantity}</span>
          <span className="cart-icon">🛒</span>
        </div>
      </header>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={`${category.category}-${index}`} className="category-section">
            <h3>{category.category}</h3>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={`${plant.name}-${plantIndex}`}>
                  <div className="product-card-top">
                    <span className="sale-tag">SALE</span>
                  </div>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <div className="product-description">{plant.description}</div>
                  <button
                    type="button"
                    className="product-button"
                    disabled={Boolean(addedToCart[plant.name])}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
