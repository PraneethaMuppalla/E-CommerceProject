import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WebContext from "../../context/web-context";
import StoreItem from "./StoreItem";
import classes from "./StoreItem.module.css";

const Store = () => {
  const ctx = useContext(WebContext);

  return (
    <Container className="text-center mt-3 ">
      <Row className="mb-4 mb-md-3">
        <Col>
          <h2> Music</h2>
        </Col>
      </Row>
      <div
        className={`${classes.cont} d-flex flex-wrap gap-4 justify-content-around m-auto`}
      >
        {ctx.musicAlbums.map((album, i) => {
          return (
            <StoreItem
              imageUrl={album.imageUrl}
              pos={i + 1}
              price={album.price}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Store;
