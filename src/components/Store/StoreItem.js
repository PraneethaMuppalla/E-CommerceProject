import React from "react";
import Col from "react-bootstrap/Col";
import classes from "./StoreItem.module.css";

const StoreItem = (props) => {
  return (
    <Col xs={10} lg={5} className="gy-2">
      <img
        src={props.imageUrl}
        alt="album"
        className={classes["album-image"]}
      />
    </Col>
  );
};

export default StoreItem;
