import React, { createContext, useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../Api/Products.js";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const prods = await fetchProducts();
      const unique = [...new Set(prods.map((p) => p.category))];

      setProducts(prods);
      setCategories(unique);
      setLoading(false);
    };
    loadData();
  }, []);
  const values = {
    products,
    categories,
    loading,
    setProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
