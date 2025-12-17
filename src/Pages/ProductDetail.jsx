import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { ProductContext } from "../Context/ProductContext";
import { useEffect } from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageFade } from "../Animations/motionStyle";
import { productDetail } from "../Styles/E_Commerce_Style";

const ProductDetail = () => {
  const { AddToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { loading } = useContext(ProductContext);

  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [related, setRelated] = useState([]);
  const isFav = wishlist.some((p) => p.id === product.id);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        fetch(`https://dummyjson.com/products/category/${data.category}`)
          .then((res) => res.json())
          .then((rel) =>
            setRelated(rel.products.filter((p) => p.id !== data.id).slice(0, 6))
          );
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-xl font-semibold text-center mt-20">
        Loading Products...
      </p>
    );

  return (
    <motion.section variants={pageFade}
      initial="hidden"
      animate="show"
      exit="exit"
       className={productDetail.mainSection}>
      <div className={productDetail.productDiv}>
        {/* image */}
        <div className={productDetail.imageDiv}>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className={productDetail.image}
          />
        </div>
        {/* info */}
        <div>
          <h2 className={productDetail.title}> {product.title} </h2>
          <p className={productDetail.brandCat}>
            Brand : {product.brand} | Cateogory : {product.category}
          </p>
          <div className={productDetail.ratePriceDiv}>
            <span className="flex gap-2">
              <strong className="text-yellow-400">
                {" "}
                {"★".repeat(Math.floor(Number(product.rating).toFixed(1)))}{" "}
              </strong>
              Ratting
            </span>
            <div>
              <p className="text-2xl font-bold text-blue-600">
                {" "}
                ${product.price}{" "}
              </p>
            </div>
          </div>
          <p className={productDetail.itemDescription}>
            {product.description}
          </p>
          <div className={productDetail.otherinfoDiv}>
            <p className={productDetail.shippingInfo}>
              {" "}
              {product.shippingInformation}{" "}
            </p>
            <p className={productDetail.warrentyInfo}>
              {" "}
              {product.warrantyInformation}{" "}
            </p>
          </div>

          <div className={productDetail.btnDiv} >
            <button
              onClick={() => AddToCart(product)}
              className={productDetail.addToCartBtn}
            >
              Add To Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`${productDetail.favoriteBtn} ${isFav ? 'text-red-600' : 'text-white border-black'}`}
            >
             <FaHeart size={22}  />
            </button>
          </div>
        </div>
      </div>
      {/* related products */}
      <h2 className={productDetail.relatedmainHeading}>Related Products</h2>
      <div className={productDetail.relatedProductGrid}>
        {related.map((item) => (
          <div key={item.id} className={productDetail.relatedProductDiv}>
            <img src={item.thumbnail} alt={item.title} className={productDetail.relatedPimage} />
            <p className={productDetail.relatedPtitle}> {item.title} </p>
            <p className={productDetail.relatedPprice}> ${item.price} </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProductDetail;
