import React from "react";
import Col from "react-bootstrap/Col";
import classes from "./StoreItem.module.css";
import Button from "react-bootstrap/Button";

const StoreItem = (props) => {
  return (
    <div className={classes["ind-cont"]}>
      <h2>Album {props.pos}</h2>
      <div className={classes["image-container"]}>
        <img src={props.imageUrl} alt="Album" />
      </div>
      <div className="d-flex justify-content-between mt-3">
        <p>Rs {props.price}</p>
        <Button variant="info" className="text-white">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default StoreItem;
