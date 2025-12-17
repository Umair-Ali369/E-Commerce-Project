import React, { use, useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductList from "../Components/ProductList";
import HeroSlider from "../Components/HeroSlider";
import Categories from "../Components/Categories";
import { motion } from "framer-motion";
import { pageFade } from "../Animations/motionStyle";

const Home = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <motion.main
      variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
      className="mt-16"
    >
      <HeroSlider />
      {loading ? (
        <p className="text-xl font-semibold text-center mt-20">Loading...</p>
      ) : (
        <>
          <Categories />
          <div className="container mx-auto pt-20">
            <h2 className="text-3xl font-bold mb-6">All Products</h2>
            <ProductList products={products} />
          </div>
        </>
      )}
    </motion.main>
  );
};

export default Home;
