import React, { useState, createContext } from "react";
import all_product from "../components/Assets/all_product";
import CartItems from "../components/CartItems/CartItems";
export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState((getDefaultCart))

  const addToCart = (ItemId) => {
    setCartItems((prev) => ({
      ...prev, [ItemId]: prev[ItemId] + 1
    }))

  }
  const RemoveFromCart = (ItemId) => {
    setCartItems((prev) => ({
      ...prev, [ItemId]: prev[ItemId] - 1
    }))
  }
  const getTotalCartAmount = () => {
   
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }


    }
    return totalAmount;
  }
  const getTotalCartItems = ()=>{
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem+= cartItems[item];
      }
    }
    return totalItem;
    }

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, RemoveFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;