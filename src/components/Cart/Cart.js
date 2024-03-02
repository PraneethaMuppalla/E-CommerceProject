import React, { useContext } from "react";

import WebContext from "../../context/web-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(WebContext);
  const removeFromCartHandler = (id) => {
    ctx.deleteFromCart(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          price={item.price}
          id={item.id}
          onRemove={removeFromCartHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      <div className={classes.cont}>
        <h2 className={classes.heading}>Cart</h2>
        <button className={classes.close} onClick={props.onHideCart}>
          X
        </button>
        <div className={classes["cart-header"]}>
          <span className={classes["cart-item"]}>Item</span>
          <span className={classes["cart-price"]}>Price</span>
          <span className={classes["cart-quantity"]}>Quantity</span>
        </div>
        {cartItems}
        <div className={classes.total}>
          <p>Rs {ctx.totalAmount} </p>
          <strong>Total</strong>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className={classes.btn}>PURCHASE</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
