import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // const [wishlist, setWishlist] = useState(() => {
  //   const saved = localStorage.getItem("wishlist");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
  // }, [wishlist]);


  const [wishlist, setWishlist] = useState([])

  const addToWishList = (product) => {
    if (!wishlist.find((p) => p.id === product.id)) {
      setWishlist((prev) => [...prev, { ...product }]);
    }
  };

  const removeFromwishlist = (id) => {
    setWishlist(wishlist.filter((p) => p.id !== id));
  };
  const values = { wishlist, addToWishList, removeFromwishlist };
  return (
    <WishlistContext.Provider value={values}>
      {children}
    </WishlistContext.Provider>
  );
};
