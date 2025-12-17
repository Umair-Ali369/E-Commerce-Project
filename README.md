# 🛒 React E-Commerce Application

A full-featured **E-Commerce web application** built with **React**, designed to demonstrate real-world frontend architecture, state management, and user shopping flow.

---

## 🚀 Live Demo
https://e-commerce-project-zeta-tan.vercel.app/

---

## 📌 Project Purpose

This project simulates a **real online shopping experience** and focuses on:
- Clean folder structure
- Reusable React components
- Global state management using Context API
- Page-based routing
- Scalable and maintainable frontend code

---

## 🧠 Architecture Overview

The application follows **component-based architecture** with:
- **Components** → Reusable UI blocks
- **Context** → Global state management
- **Pages** → Route-based screens

This separation makes the app easy to understand, maintain, and extend.

---
## Navbar
- Displays navigation links
- Shows cart & wishlist item count
- Uses Cart and Wishlist Context

## HeroSlider
- Promotional banners
- Used on Home page

## Categories
- Displays product categories
- Allows quick category-based navigation

## Filter
- Filters products by category or price
- Updates UI dynamically

## ProductCard
- Displays single product information
- Handles add-to-cart and wishlist actions
- Reused across multiple pages

## ProductList
- Renders list of products using ProductCard
- Keeps UI modular and clean

#### Static footer component
###Appears on all pages

🧠 Context API (State Management)
## Product Context
- Stores all product data
- Provides products to all pages
- Handles filtering logic
## Cart Context
- Manages cart items globally
- Supports add, remove, and quantity updates
- Used across Cart, Navbar, and Checkout
## Wishlist Context
- Manages wishlist items
- Add/remove products from wishlist

--- 

### 🛠️ Tech Stack
- React
- React Context API
- React Router
- JavaScript (ES6+)
- Vite
- CSS / Tailwind CSS


