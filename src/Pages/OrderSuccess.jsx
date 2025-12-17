import React from 'react'
import { motion } from 'framer-motion'
import { pageFade } from '../Animations/motionStyle'
import { orderSuccess } from '../Styles/E_Commerce_Style'

const OrderSuccess = () => {
  return (
    <motion.section variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className={orderSuccess.section}>
        <h1 className={orderSuccess.headSms}>🎉 Order Placed Successfully!</h1>
        <p className='text-gray-600'>Thanks For Shopping With Us</p>
        <a href="/" className={orderSuccess.backbtn}>
         Back To Home
        </a>
    </motion.section>
  )
}

export default OrderSuccess