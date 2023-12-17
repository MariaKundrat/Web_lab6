import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Footer from './Footer/Footer';

const App = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [showCatalog, productsData]);

  return (
    <Router>
      <div>
        <Header
          setShowCatalog={setShowCatalog}
          showCatalog={showCatalog}
          setProductsData={setProductsData}
          productsData={productsData}
          setShowShoppingCart={setShowShoppingCart}
        />
        {showShoppingCart ? (
          <ShoppingCart
            showShoppingCart={showShoppingCart}
            setShowCatalog={setShowCatalog}
            setShowShoppingCart={setShowShoppingCart}
          />
        ) : (
          <Home
            key={key}
            showCatalog={showCatalog}
            productsData={productsData}
          />)}
        < Footer />
      </div>
    </Router>
  );
}

export default App;
