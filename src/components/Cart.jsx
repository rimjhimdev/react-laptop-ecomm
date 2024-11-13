import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart-error-msg">
          <p>NO ITEM FOUND IN THE CART.</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart-box-heading">
            <div className="cart-box-heading-style">
              <p>Item</p>
            </div>
            <div className="cart-box-heading-style">
              <p>Price</p>
            </div>
            <div className="cart-box-heading-style">
              <p>Quantity</p>
            </div>
            <div className="cart-box-heading-style">
              <p>Sub Total</p>
            </div>
            <div className="cart-box-heading-style">
              <p>Remove</p>
            </div>
          </div>
          <hr />

          <div className="cart-item">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>

          <hr />
          <div className="cart-two-button">
            <div className="cart-one-btn">
              <button onClick={() => {}}>
                <Link to="/All-laptops">CONTINUE SHOPPING</Link>
              </button>
            </div>
            <div className="cart-two-btn">
              <button onClick={clearCart}>CLEAR CART</button>
            </div>
          </div>

          <div className="cart-end-section">
            <div className="cart-total-section">
              <div className="cart-total-subtotal">
                <p>
                  Subtotal: <span>₹{total_price}</span>
                </p>
                <p>
                  Shipping Fee : <span>₹{shipping_fee}</span>
                </p>
              </div>
              <div className="cart-total-amount">
                <p>
                  Order Total:
                  <span>₹{Number(shipping_fee) + Number(total_price)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
