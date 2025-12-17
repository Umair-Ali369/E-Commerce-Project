import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import WhishList from "./Pages/WhishList";
import OrderSuccess from "./Pages/OrderSuccess";
import ScrolToTop from './Components/ScrolToTop'

const App = () => {

  return (
    <>
      <Navbar />
      <ScrolToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WhishList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/order-success" element={<OrderSuccess/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
