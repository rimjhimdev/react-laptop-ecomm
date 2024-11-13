import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ laptop }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext(); // Access addToCart from context

  const setIncrease = () => {
    amount < laptop.stock ? setAmount(amount + 1) : setAmount(laptop.stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <>
      <div className="add-to-cart">
        <CartAmountToggle
          amount={amount}
          setIncrease={setIncrease}
          setDecrease={setDecrease}
        />

        <div className="buy-cart-btn">
          {/* <div className="buy-cart-btn-1">
            <Link to="#!">
              <button>BUY NOW</button>
            </Link>
          </div> */}
          <div className="buy-cart-btn-1">
            <button
              onClick={() =>
                addToCart(
                  // laptop.id, laptop.color,
                  amount,
                  laptop
                )
              }
            >
              <Link to="/cart">ADD TO CART</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
