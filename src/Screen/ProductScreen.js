import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const ProductScreen = () => {
  const { id } = useParams();
  // const product = products.find((prod) => prod._id === id);
  // console.log(product);
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function call() {
      try {
        //axis is throwing error here because of status code
        const { data } = await axios.get(`/api/products/${id}`);
        console.log(data);
        setProduct(data);

        console.log("iam changing...");
      } catch (error) {
        console.log(error);
      }
    }
    call();
  }, []);
  return (
    <Container className="my-2">
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <Container className="mt-2">
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>{product.name}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
              <ListGroupItem>
                <Rating rating={product.rating} total={product.numReviews} />
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                Price : <strong className="fw-bold">$ {product.price}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup className="text-center">
              <ListGroupItem>
                {" "}
                Price : <strong className="fw-bold">$ {product.price}</strong>
              </ListGroupItem>
              <ListGroupItem>
                {product.countInStock ? "In Stock" : "out of stock"}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn btn-sm"
                  disabled={product.countInStock <= 0 ? true : false}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductScreen;
