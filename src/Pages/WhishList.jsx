import React, { useContext } from 'react'
import { WishlistContext } from '../Context/WishlistContext'
import { ProductCard2 } from '../Components/ProductCard2'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageFade } from '../Animations/motionStyle'
import { wishlistPage } from '../Styles/E_Commerce_Style'

const WhishList = () => {
  const { wishlist } = useContext(WishlistContext) 

  if (wishlist.length === 0)
    return (
      <div className={wishlistPage.empltydiv}>
        <h1 className={wishlistPage.emptyHead}> Your Cart is empty </h1>
        <Link to='/' className={wishlistPage.shopBtn}> Continue Shopping </Link>
      </div>
    );
  
  return (
   <motion.section variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className={wishlistPage.mainSection}>
    <h2 className={wishlistPage.mainHeading}>Your Wishlist</h2>
    <div className={wishlistPage.productGrid}>
      {wishlist.map((p) => (
        <ProductCard2 key={p.id} product={p} />
      ))}
    </div>
    
   </motion.section>
  )
}

export default WhishList