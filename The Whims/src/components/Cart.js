import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import CheckoutModal from "./CheckoutModal";
import FilterLogo from '../assets/FilterImage.png';
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home">
      <div className="productContainerSummary">
        <ListGroup className="text-center">
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id} className="mb-2">
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col lg={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col lg={2}>₹ {prod.price}</Col>
                <Col lg={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col lg={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col lg={2}>
                  <Button
                    type="button"
                    variant="light"
                    style={{ backgroundColor: "purple", color: "white" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <img src={FilterLogo} alt="Logo" height={"auto"} style={{ marginBottom: 15 }}></img>
        <span className="title">Subtotal ({cart.length}) items</span>
        <span className="total-price">Total: ₹ {total}</span>
        <Button variant="light" type="button" onClick={handleCheckout} disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
      {showModal && <CheckoutModal total={total} onClose={closeModal} />}
    </div>
  );
};

export default Cart;
