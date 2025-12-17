import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext'
import { WishlistContext } from '../Context/WishlistContext'
import { motion } from "framer-motion";
import { cardHover } from "../Animations/motionStyle";
import { FaHeart } from 'react-icons/fa'
import { ProductCard } from "../Styles/E_Commerce_Style";


export const ProductCard2 = ({ product }) => {

  const { AddToCart } = useContext(CartContext)
  const { wishlist, addToWishList, removeFromwishlist } = useContext(WishlistContext)

  const isFav = wishlist.some((p) => p.id === product.id)
  
  return (
    <motion.section variants={cardHover} whileHover="hover" className={ProductCard.mainSection}>
      <Link to={`/product/${product.id}`}>
        <div className={ProductCard.prdtImageDiv}>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className={ProductCard.imageStyle}
          />
        </div>
        <div className={ProductCard.productDetailDiv}>
          <div className={ProductCard.titleDiv}>
            <h3 className={ProductCard.title}>
              {" "}
              {product.title}{" "}
            </h3>
          </div>
          <div className={ProductCard.priceDiv}>
            <span className={ProductCard.price}>
              {" "}
              ${product.price}{" "}
            </span>
          </div>
           <p className={`${ProductCard.badge} ${product.availabilityStatus === "In Stock" ? 'bg-green-400' : 'bg-red-400'}`}> {product.availabilityStatus} </p>
        </div>
      </Link>

      <div className={ProductCard.btnDiv}>
        <button 
        onClick={() => AddToCart(product)}
        className={ProductCard.addToCartBtn} > 
          Add To Cart
        </button>
       <button
              onClick={() =>  isFav ? removeFromwishlist(product.id) : addToWishList(product)}
              className={`${ProductCard.wishlistBtn}  ${isFav ? 'text-red-600' : 'text-white border-black'}`}
            >
             <FaHeart size={22} />
            </button>
      </div>
    </motion.section>
  );
};


