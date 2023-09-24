import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartProvider } from "./ContextAPI/CartContext";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SliderBottom from "./components/SliderBottom";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar/>
        <Header />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <SliderBottom/>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
