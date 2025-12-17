import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { WishlistProvider } from "./Context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
