import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./StoreItem.module.css";
import Button from "react-bootstrap/Button";
import WebContext from "../../context/web-context";

const StoreItem = (props) => {
  const ctx = useContext(WebContext);
  const navigate = useNavigate();
  const addToCartHandler = () => {
    ctx.addToCart(props.id);
  };
  const navigationHandler = () => {
    navigate(`/store/${props.id}`);
  };

  return (
    <div className={classes["ind-cont"]}>
      <h2 className="mb-3">{props.title}</h2>

      <div className={classes["image-container"]} onClick={navigationHandler}>
        <img src={props.imageUrl} alt="Album" />
      </div>
      <div className="d-flex flex-row align-items-end justify-content-between m-3">
        <span>Rs {props.price}</span>
        <Button
          variant="info"
          className="text-white "
          onClick={addToCartHandler}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default StoreItem;
