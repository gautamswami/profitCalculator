import React, { useState } from 'react';
import './App.css'
function App() {
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const calculateOriginalPrice = () => {
    const originalPrice = discountedPrice / (1 - (discountPercentage / 100));
    setOriginalPrice(originalPrice);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="theme-toggle">
        <label htmlFor="theme-switch">Dark Mode:</label>
        <input
          type="checkbox"
          id="theme-switch"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
      <h1>Discount Calculator</h1>
      <div>
        <label htmlFor="discountedPrice">Discounted Price:</label>
        <input
          type="number"
          id="discountedPrice"
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="discountPercentage">Discount Percentage:</label>
        <input
          type="number"
          id="discountPercentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateOriginalPrice}>Calculate Original Price</button>
      {originalPrice > 0 && <p>Original Price: {originalPrice.toFixed(2)}</p>}
    </div>
  )
}

export default App
