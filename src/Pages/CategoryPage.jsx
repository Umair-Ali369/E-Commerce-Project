import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useEffect } from "react";
import { ProductCard2 } from "../Components/ProductCard2";
import { motion } from "framer-motion";
import { pageFade } from "../Animations/motionStyle";
import { categoryPage } from "../Styles/E_Commerce_Style";
const CategoryPage = () => {
  const { slug } = useParams();
  const { loading, products } = useContext(ProductContext);

  const categoryName = slug;

  const fiilteredProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (loading)
    return (
      <p className="text-xl font-semibold text-center mt-20 ">
        Loading Products...
      </p>
    );
  console.log("Value of name:", slug);
  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className={categoryPage.mainSection}
    >
      <div className={categoryPage.headDiv}>
        {/* title  */}
        <h1 className={categoryPage.catName}>
          {" "}
          {categoryName.replace(/-/g, " ")}{" "}
        </h1>
        <p className={categoryPage.prdctLength}>
          ( Products {fiilteredProducts.length} ){" "}
        </p>
      </div>

      <div className={categoryPage.prdctGrid}>
        {fiilteredProducts.map((p) => (
          <ProductCard2 key={p.id} product={p} />
        ))}
      </div>
    </motion.section>
  );
};

export default CategoryPage;
