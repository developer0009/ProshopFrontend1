// import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
const Products = ({ products, error, loading }) => {
  return (
    <Container className="mt-5">
      <h1 className="">Latest Products</h1>
      {loading ? (
        "loading"
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row className="mt-2">
          {" "}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
