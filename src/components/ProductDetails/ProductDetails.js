import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import classes from "./ProductDetails.module.css";

import WebContext from "../../context/web-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductDetails = () => {
  const ctx = useContext(WebContext);
  const params = useParams();
  const navigate = useNavigate();
  const { productId } = params;

  const item = ctx.musicAlbums.find((eachAlbum) => eachAlbum.id === +productId);
  const addToCartHandler = () => {
    ctx.addToCart(item.id);
  };
  const goBackToStore = () => {
    navigate("/store");
  };

  return (
    <Container className={`${classes.cont} d-flex align-items-center  `}>
      <Row>
        <Col xs={12} lg={6} className="d-flex justify-content-center ">
          <img src={item.imageUrl} alt="Music album" />
        </Col>
        <Col className=" text-center text-md-start">
          <h2 className=" fs-3">{item.title}</h2>
          <h3 className=" fs-1 fw-bold">Rs {item.price}</h3>
          <div className="mt-3">
            <Button variant="dark" onClick={addToCartHandler}>
              Add to Cart
            </Button>
            <Button
              variant="outline-dark"
              className="ms-2"
              onClick={ctx.showCart}
            >
              View Cart
            </Button>
          </div>
          <p className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            cumque dignissimos blanditiis ipsam aspernatur non voluptatum iste
            excepturi fugit quis? Nihil, adipisci officia. Beatae officia odit,
            obcaecati temporibus nisi accusantium? Autem fugiat debitis quisquam
            sequi aspernatur laboriosam aperiam obcaecati,
            <br></br>
            consequatur? Iste ea optio consequuntur accusamus possimus dolorum
            commodi ipsa suscipit neque voluptas odio quaerat praesentium
            aliquid minus eligendi, voluptatum earum aliquam placeat facere
            quae, iure cumque. Molestias nihil porro at voluptate unde provident
            suscipit ipsum illum, nulla nostrum numquam, odio, cupiditate
            nesciunt pariatur.
          </p>
          <Button variant="dark" size="sm" onClick={goBackToStore}>
            Back to Store
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
