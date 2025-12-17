import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"
import { CartContext } from '../Context/CartContext'
import { WishlistContext } from '../Context/WishlistContext'
import { NavStyles } from "../Styles/E_Commerce_Style";


const Navbar = () => {

  const  { cartItems } = useContext(CartContext)
  const { wishlist } = useContext(WishlistContext)

 

  return (
    <nav className={NavStyles.nav} >
      <div className={NavStyles.mainDiv}  >
        {/* LOGO */}
        <Link to="/" className={NavStyles.logo} > FA NexaMart </Link>

        {/* LINKS */}
        
        {/* CART + WISHLIST */}
        <div className="flex gap-4">
          <Link to="/wishlist" className="flex relative">
            {" "}
            <Heart size={30} />{" "}
             {wishlist.length > 0 && (
              <span className={NavStyles.wishlisCount}>
                {wishlist.length}
              </span>
            )}
          </Link>
          <div className='flex relative'>
            <Link to="/cart">
              {" "}
              <ShoppingCart size={30} />{" "}
            </Link>
            {/* cart coutn */}
            {cartItems.length > 0 && (
              <span className={NavStyles.cartCount}>
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            )}
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


