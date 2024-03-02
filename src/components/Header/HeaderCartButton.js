import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import WebContext from "../../context/web-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonIsHighLighted, setIsButtonHighlighted] = useState(false);
  const ctx = useContext(WebContext);
  const totalItems = ctx.cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const btnClasses = `${classes.button} ${
    buttonIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (ctx.cartItems.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.cartItems]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
