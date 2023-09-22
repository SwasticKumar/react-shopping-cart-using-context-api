import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";

const SingleProduct = ({ product, cartPage, count, setCount }) => {
  const { cart, setCart } = useContext(CartContext);
  const [productTotal, setProductTotal] = useState(null);

  const Addtotals = () => {
    //update the state and multiple the count of total price
    setProductTotal(product.price * (count + 1));
    setCount(count + 1);
  };

  //console.log(product.price);
  const RemoveTotal = () => {
    setProductTotal(product.price * (count - 1));
    setCount(count - 1);
  };



  // Rendering
  return (
    <div key={product.id}>
      {/*card  */}

  {/* using Ternary operator  using CartPage*/}
  {cartPage ?  (
    
    // if -------------(Cart Page Card ) ---------------------

    <div className="products">
    {/* Product details */}

{/* Product Name */}
      <h5 className="d-flex justify-content-center mt-4 fst-bold " style={{textAlign:"center"}}>{product.title}</h5>
      <br />

{/* Product Image */}
<span >
< img  className="img" src={product.images[0]} alt="product images" />

<h5 className="text-center fst-normal mb-4 mt-3">
        {product.price} </h5>
{cartPage ? (
       
      //  ---------------
      <div className="countHandler my-4">
          <button onClick={() => {
                if (count > 0) {
                  RemoveTotal();
                 
                }
              }}>-</button>
           <input value={count || 1}/>
          <button  onClick={() => {
                Addtotals();
              }}>+</button>
        </div>
       
       ) : (
          ""
        )}

        </span>
 
{/*  */}
<div>
    {cart.find((item) => item.id === product.id) ? (
      <button
        className="remove-cart"
        onClick={() => {
          setCart(cart.filter((c) => c.id !== product.id));
        }}
      >
        Remove From Cart
      </button>
    ) : (
      <button
        className="add "
        onClick={() => {
          setCart([...cart, product]);
        }}
      >
        Add to Cart
      </button>
    )}
    </div>

  
  </div>

          
  ) : (

// Else---------- (Shop page Cart) -------------------


    <div className="products">
    {/* Product details */}
{/* Discount Badge */}

  <h6><span className="badge bg-white text-danger border border-danger mt-2">{product.discount}</span></h6>
{/* Product Name */}
      <h2 className="d-flex justify-content-center mt-2 fst-bold" style={{textAlign:"center"}}>{product.title}</h2>
      <br />
{/* Product Price */}

      <h5 className="text-center fst-normal mb-4">From
        {product.price} <span style={{ textDecoration: 'line-through', color:"gray", fontSize:"19px",paddingLeft:"5px"}}>{product.originalprice}</span> </h5>
  

{/* Add to Cart or Remove from Cart button */}

    <div>
    {cart.find((item) => item.id === product.id) ? (
      <button
        className="remove"
        onClick={() => {
          setCart(cart.filter((c) => c.id !== product.id));
        }}
      >
        Remove From Cart
      </button>
    ) : (
      <button
        className="add "
        onClick={() => {
          setCart([...cart, product]);
        }}
      >
        Add to Cart
      </button>
    )}
    </div>

{/* Product Image */}
    <img className="img" src={product.images[0]} alt="product images" />
  
  </div>


  )}
      
</div>

  );
};

export default SingleProduct;
