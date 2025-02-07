// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router
import ShopPage from './pages/shop';  // Import ShopPage
import CartPage from './pages/cart';  // Import CartPage
import OnSalePage from './pages/onSale';  // Import OnSalePage
import NewArrivalsPage from './pages/newArrivals';  // Import NewArrivalsPage
import BrandsPage from './pages/brands';  // Import BrandsPage
import NotFoundPage from './pages/notFound';  // Import a 404 Page 

const App = () => {
  return (
    <Router>
      <div className="App">
      

        <Routes>
         
          <Route path="/" element={<ShopPage />} />  {/* Shop Page */}
          <Route path="/shop" element={<ShopPage />} />  {/* Another Shop Page */}
          <Route path="/cart" element={<CartPage />} />  {/*Another Cart Page */}
          <Route path="/on-sale" element={<OnSalePage />} />  {/* On Sale Page */}
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />  {/* New Arrivals Page */}
          <Route path="/brands" element={<BrandsPage />} />  {/* Brands Page */}
          <Route path="*" element={<NotFoundPage />} />  {/* Catch all 404 Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

 