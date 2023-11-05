import React, { useState } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';


const App = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  
  return (
    <div>
      <Header
        setShowCatalog = {setShowCatalog}
        showCatalog = {showCatalog}
      />
      <Home showCatalog = {showCatalog} />
      <Footer />
    </div>
  );
}

export default App;
