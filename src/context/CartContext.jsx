"use client";
import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

// Custom hook to use CartContext
const useCartContext = () => useContext(CartContext);

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("quantumCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: "5000",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (amount, laptop) => {
    dispatch({ type: "ADD_TO_CART", payload: { amount, laptop } });
    // this will hit functions in CartReducer
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // to add  the data in localstorage
  useEffect(() => {
    //change cart no in the navigation
    dispatch({ type: "CART_TOTAL_ITEM" });

    //getting for all the items in cart
    dispatch({ type: "CART_TOTAL_PRICE" });

    localStorage.setItem("quantumCart", JSON.stringify(state.cart));
    // return () => {};
  }, [state.cart]);

  // to clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // INCRE AND DECRE IN CART
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: { id } });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: { id } });
  };

  return (
    <>
      <CartContext.Provider
        value={{
          ...state,
          addToCart,
          removeItem,
          clearCart,
          setDecrease,
          setIncrease,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export { CartProvider, useCartContext };
