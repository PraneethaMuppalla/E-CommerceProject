import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WebContext from "../../context/web-context";
import StoreItem from "./StoreItem";

const Store = () => {
  const ctx = useContext(WebContext);

  return (
    <Container className="text-center mt-3">
      <Row>
        <Col>
          <h2> Music</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {ctx.musicAlbums.map((album) => {
          return <StoreItem imageUrl={album.imageUrl} />;
        })}
      </Row>
    </Container>
  );
};

export default Store;
