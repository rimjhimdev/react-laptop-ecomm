import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { amount, laptop } = action.payload;
    const uniqueId = `${laptop.id}-${laptop.Colour || "default"}`; // Unique ID with fallback

    // Check if the item already exists in the cart
    const existingItem = state.cart.find((curItem) => curItem.id === uniqueId);

    if (existingItem) {
      // Update the existing item’s amount
      const updatedCart = state.cart.map((curItem) => {
        if (curItem.id === uniqueId) {
          let newAmount = curItem.amount + amount;
          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }

          return { ...curItem, amount: newAmount };
        }
        return curItem;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      // Add a new item to the cart
      const cartProduct = {
        id: uniqueId,
        name: laptop.name,
        color: laptop.Colour || "default", // Fall back if Colour is undefined
        amount,
        image: laptop.images[0],
        price: laptop.price,
        max: laptop.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload.id
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Handle decrement in the cart
  if (action.type === "SET_DECREASE") {
    const updatedCart = state.cart.map((curItem) => {
      if (curItem.id === action.payload.id) {
        let decAmount = curItem.amount - 1;
        if (decAmount < 1) {
          decAmount = 1;
        }
        console.log("Decrementing item:", curItem, "New amount:", decAmount);
        return { ...curItem, amount: decAmount };
      }
      return curItem;
    });

    console.log("Cart after SET_DECREASE:", updatedCart);
    return { ...state, cart: updatedCart };
  }

  // Handle increment in the cart
  if (action.type === "SET_INCREASE") {
    const updatedCart = state.cart.map((curItem) => {
      if (curItem.id === action.payload.id) {
        let incAmount = curItem.amount + 1;

        if (incAmount >= curItem.max) {
          incAmount = curItem.max;
        }
        console.log("Incrementing item:", curItem, "New amount:", incAmount);
        return { ...curItem, amount: incAmount };
      }
      return curItem;
    });

    console.log("Cart after SET_INCREASE:", updatedCart);
    return { ...state, cart: updatedCart };
  }

  // To clear the cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  //change cart no in the navigation.
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curItem) => {
      let { amount } = curItem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curItem) => {
      let { price, amount } = curItem;

      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default CartReducer;
