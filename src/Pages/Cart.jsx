import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageFade } from "../Animations/motionStyle";
import { cart } from "../Styles/E_Commerce_Style";

const Cart = () => {
  const {
    cartItems,
    updateQty,
    removeCompletely,
    clearCart,
    subTotal,
    tax,
    total,
  } = useContext(CartContext);

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4"> Your Cart is Empty 😕 </h2>
        <Link to="/" className="text-blue-600 underline">
          {" "}
          Continue Shopping{" "}
        </Link>
      </div>
    );

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className={cart.mainSection}
    >
      <div className={cart.mainDiv}>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className={cart.catItemMainDiv}
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className={cart.proudctImage}
              />

              <div className="flex-1">
                <h2 className={cart.itemtitle}> {item.title} </h2>
                <p className={cart.itemprice}> ${item.price} </p>

                <div className={cart.cartbtnDiv}>
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className={cart.QtyBtns}
                  >
                   
                    -
                  </button>
                  <span className="font-semibold"> {item.qty} </span>
                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className={cart.QtyBtns}
                  >
                  
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeCompletely(item.id)}
                className={cart.removeBtn}
              >
                Remove
              </button>
              <div className={cart.price}>
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>

      {/* // RIGHT order summary  */}
      <div className={cart.Div}>
        <h2 className={cart.mainHeading}>Order Summary</h2>
        <div className={cart.subtotal}>
          <span className="font-semibold  "> Subtotal </span>
          <span> ${subTotal.toFixed(2)} </span>
        </div>
        <div className={cart.tax}>
          <span className="font-semibold  "> Tax (10%) </span>
          <span> ${tax.toFixed(2)} </span>
        </div>
        <div className={cart.total}>
          <span className="font-semibold  "> Total </span>
          <span> ${total.toFixed(2)} </span>
        </div>

        <div className={cart.buttonsDiv}>
          <Link
            to="/checkout"
            className={cart.checkoutBtn}
          >
            Proceed to Checkout
          </Link>

          <button
            onClick={clearCart}
            className={cart.clearCartbtn}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;
