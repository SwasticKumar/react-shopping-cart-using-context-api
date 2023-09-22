import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../ContextAPI/CartContext";

function Home() {
  const { products } = useContext(CartContext);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
