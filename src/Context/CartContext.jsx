import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  //add to cart
  const AddToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if(exist) {
        return prev.map((item) => item.id === product.id ? {...item, qty : item.qty + 1} : item) 
      }

      return [...prev, {...product, qty : 1}]
    })
  }

  //REMOVE FROM CART > ONE ITEM
  const updateQty = (id, type ) => {
    setCartItems((prev) => 
    prev.map((item) => {
      if(item.id !== id) return item;

      if(type === 'inc') return {...item, qty : item.qty + 1};
      if(type === 'dec') return {...item, qty : Math.max(item.qty - 1, 1)}
    }
  
  ) 
  )
  }

  //REMOVE FROM CART completely
  const removeCompletely = (id) => {
    setCartItems(cartItems.filter((i) => i.id !== id))
  }

  //CLEAR CART 
  const clearCart = () => setCartItems([])

  // TOTALS
  const subTotal = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
  const tax = subTotal * 0.1;
  const total = subTotal + tax

   const values = {cartItems, AddToCart, updateQty, removeCompletely, clearCart, subTotal, tax, total}

   return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

