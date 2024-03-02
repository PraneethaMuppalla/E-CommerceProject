import React from "react";
import Button from "react-bootstrap/Button";

import classes from "./Cart.module.css";
const CartItem = (props) => {
  const deleteItemHandler = () => {
    props.onRemove(props.id);
  };
  return (
    <li className={classes["cart-row"]}>
      <span
        className={classes["cart-item"]}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={props.imageUrl} alt="album name" />
        <p>{props.title}</p>
      </span>
      <span className={classes["cart-price"]}>{props.price}</span>
      <span className={classes["cart-quantity"]}>
        <input disabled type="number" value={props.quantity} />
        <Button variant="danger" onClick={deleteItemHandler}>
          Remove
        </Button>
      </span>
    </li>
  );
};

export default CartItem;
