import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageFade } from "../Animations/motionStyle";
import { checkout } from "../Styles/E_Commerce_Style";
const Checkout = () => {
  const { cartItems, total, subTotal, tax } = useContext(CartContext);

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });

    if (sameAsShipping) {
      setBilling({ ...billing, [e.target.name]: e.target.value });
    }
  };

  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className={checkout.mainSection}
    >
      {/* left */}
      <div className={checkout.leftSection}>
        {/* SHIPPINIG SECTION */}
        <div className={checkout.shippingSection}>
          <h2 className={checkout.shipHeading}>Shipping Information</h2>
          <div className={checkout.shippingFromGrid}>
            {Object.keys(shipping).map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={shipping[field]}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                onChange={handleShippingChange}
                className="border p-3 rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Billing section */}
        <div className={checkout.billingSection}>
          <div className={checkout.billingMainDiv}>
            <h2 className={checkout.bilHeading}>Billing Infromation</h2>
            <label className={checkout.label}>
              <input
                type="checkbox"
                checked={sameAsShipping}
                onChange={() => {
                  setSameAsShipping(!sameAsShipping);
                  if (!sameAsShipping) {
                    setBilling(shipping);
                  }
                }}
              />
              Same as Shipping
            </label>
          </div>

          <div className={checkout.billingFromGrid}>
            {Object.keys(billing).map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={billing[field]}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                disabled={sameAsShipping}
                onChange={handleBillingChange}
                className={`border p-3 rounded-lg ${
                  sameAsShipping ? "bg-gray-200 cursor-not-allowed" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Summary */}
      <div className={checkout.rightSection}>
        <h2 className={checkout.Heading}>Order Summary</h2>
        <div className={checkout.Div1}>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {" "}
                {item.title} x {item.qty}{" "}
              </span>
              <span> ${(item.price * item.qty).toFixed(2)} </span>
            </div>
          ))}
        </div>
        <div className="border-t my-4"></div>
        <div className={checkout.subtotalTaxStyle}>
          <span className="font-semibold  "> Subtotal </span>
          <span> ${subTotal.toFixed(2)} </span>
        </div>
        <div className={checkout.subtotalTaxStyle}>
          <span className="font-semibold  "> Tax (10%) </span>
          <span> ${tax.toFixed(2)} </span>
        </div>
        <div className={checkout.total}>
          <span className="font-semibold  "> Total </span>
          <span> ${total.toFixed(2)} </span>
        </div>
        <button className={checkout.placeOrderbtn}>
          <Link to="/order-success">Place Order</Link>
        </button>
      </div>
    </motion.section>
  );
};

export default Checkout;
