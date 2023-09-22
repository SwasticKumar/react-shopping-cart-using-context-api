import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(CartContext);

  const [productCounts, setProductCounts] = useState(
    cart.reduce((counts, product) => {
      counts[product.id] = 1;
      return counts;
    }, {})
  );

  // ------------------------
  // const getPriceAsInteger = (priceString) => {
  //   const numericPrice = priceString.replace(/[^0-9]/g, "");
  //   return parseInt(numericPrice, 10);
  // };
  // ----------------------

  const calculateTotalPrice = () => {
    let totalPrice = cart.reduce((sum, product) => {
      const productCount = productCounts[product.id];
      const productPrice = parseInt(
        product.price.replace(" ₹", "").replace(",", ""),
        10
      ); // Parse the price string to an integer
      return sum + productCount * productPrice;
    }, 0);

    return totalPrice;
  };

  const updateProductCount = (productId, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: newCount,
    }));
  };

  return (
    <div className="text-center">
      <div className="cart-product">
        {cart.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            cartPage={true}
            count={productCounts[product.id]} // Pass the count for the specific product
            setCount={(newCount) => updateProductCount(product.id, newCount)} // Pass the function to update the count
          />
        ))}
      </div>
      {/* Ternary Operator */}
      {cart.length === 0 ? (
        <div className=" NoItems ">
          <img
            className="w-50"
            src=" https://i01.appmifile.com/webfile/globalimg/i18n_frontend/cart/cart-empty.svg"
            alt="Cart Empty image "
          />
          <p class="text-secondary fs-small my-5">
            Your shopping cart is empty
          </p>
          <button
        className="remove-shop">
        <Link to="/">
              Shop Now &gt;
            </Link>
      </button>
        

          {/**/}
        </div>
      ) : (
        <div class="checkout my-5">
          <h5>Grand Total :₹{calculateTotalPrice()}</h5>
          <button>
            {" "}
            <Link className="text-white" to="/">
              Continue Shopping
            </Link>
          </button>
          <button> Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
