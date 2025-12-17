import React, {useState} from 'react'
import {ProductCard2} from './ProductCard2'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../Animations/motionStyle'
import { productList } from '../Styles/E_Commerce_Style'


const ProductList = ({products}) => {
  
  return (
    <section>
     <motion.div 
     variants={staggerContainer} initial="hidden" whileInView="show"
     className={productList.mainDiv}>
      
      {products.map((product)=> (
        <motion.div variants={fadeUp}>

          <ProductCard2 key={product.id} product={product}/>
        </motion.div>
      ))}
    </motion.div>
    </section>
  )
}

export default ProductList