// CartContext.js
import React, { createContext, useEffect, useState } from "react"; // call to Import Hooks
import axios from "axios"; // Import Axios

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Use Axios to make the API request
    axios.get("/mocks/Products.json")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  // Rendering to pass value managing global state
  return (
    <CartContext.Provider value={{ products, setCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
