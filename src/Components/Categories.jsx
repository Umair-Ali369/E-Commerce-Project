import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { motion } from "framer-motion";
import { hoverScale } from "../Animations/motionStyle";
import { CategoriesStyle } from "../Styles/E_Commerce_Style";

const Categories = () => {
  const { categories} = useContext(ProductContext);
  return (
    <section className={CategoriesStyle.mainSection}>
      <h2 className={CategoriesStyle.mainTitle}>Select By Categories</h2>
      <div className={CategoriesStyle.mainCatDiv}>
        {categories.map((cat, index) => (
          <Link
            key={index}
            className={CategoriesStyle.catLink}
            to={`/category/${cat.replace(/\s+/g, "-")}`}
          > 
          <motion.div variants={hoverScale} whileHover="hover" whileTap="tap" className="capitalize">

            {cat.replace(/\-/g," ")}
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
