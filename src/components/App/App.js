import React, { useState } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import PRODUCTS_DATA from '../ProductsData';

const App = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [productsData, setProductsData] = useState(PRODUCTS_DATA);

  return (
    <div>
      <Header
        setShowCatalog = {setShowCatalog}
        showCatalog = {showCatalog}
        setProductsData = {setProductsData}
        productsData = {productsData}
      />
      <Home 
        showCatalog = {showCatalog}
        productsData = {productsData}
      />
      <Footer />
    </div>
  );
}

export default App;
