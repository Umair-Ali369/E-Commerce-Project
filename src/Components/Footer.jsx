import React from 'react'
import { footerStyle } from '../Styles/E_Commerce_Style'


const Footer = () => {
  return (
   <footer className={footerStyle.footer}>
    <div className={footerStyle.mainDiv}>
      <p> &copy; {new Date().getFullYear().toLocaleString()} FA NexaMart. All rights reserved </p>
    </div>
   </footer>
  )
}

export default Footer