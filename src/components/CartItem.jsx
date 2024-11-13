import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, color, amount, image, price }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext(); // Get removeItem from context

  // const setIncrease = () => {
  //   // Logic to increasxde quantity if needed
  // };
  // const setDecrease = () => {
  //   // Logic to decrease quantity if needed
  // };

  return (
    <div className="cart-box-heading">
      <div className="item-section">
        <div className="item-sect-img">
          <img src={image} alt={name} />
        </div>
        <div className="item-sect-desc">
          <p>{name}</p>
          <p>
            <b>Color:</b> {color}
          </p>
        </div>
      </div>

      <div className="price-section">
        <p>₹{price}</p>
      </div>

      <div className="quantity-section">
        <CartAmountToggle
          amount={amount}
          setIncrease={() => setIncrease(id)}
          setDecrease={() => setDecrease(id)}
        />
      </div>

      <div className="subtotal-section">
        <p>₹{price * amount}</p>
      </div>

      <div className="removeitem-section">
        <button onClick={() => removeItem(id)}>❌</button>
      </div>
    </div>
  );
};

export default CartItem;
