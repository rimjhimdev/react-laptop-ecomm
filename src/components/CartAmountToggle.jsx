import React from "react";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <>
      <div className="cart-incre-decre">
        <div className="amount-toggle">
          <button onClick={() => setDecrease()}>➖</button>
          <p>{amount}</p>
          <button onClick={() => setIncrease()}>➕</button>
        </div>
      </div>
    </>
  );
};

export default CartAmountToggle;
