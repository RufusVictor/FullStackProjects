import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";
import paymentProcessingGif from "../assets/paymentProcessing.gif";
import paymentSound from '../assets/paymentSound.mp3';

const CheckoutModal = ({ total, onClose }) => {
  const [address, setAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const { dispatch } = CartState();
  const navigate = useNavigate();
  const [focusStyle, setFocusStyle] = useState({});

  useEffect(() => {
    // Add the no-scroll class to body when the modal is open
    document.body.classList.add("no-scroll");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
      // Cleanup function to cancel any ongoing processing
      if (processing) {
        setProcessing(false); // Reset processing state if component unmounts
      }
    };
  }, [processing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Play payment audio
    const audio = new Audio(paymentSound);
    audio.play();

    // Simulate payment processing
    const timeoutId = setTimeout(() => {
      // Clear the cart
      dispatch({ type: "CLEAR_CART" });
      // Close the modal and set the processing state to false
      onClose();
      setProcessing(false);
      navigate("/");
    }, 31000); // Adjusted to play for the duration of the audio

    // Clear timeout if component unmounts before timeout finishes
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal">
        <h2 style={{ fontFamily: "Great Vibes" }}>Proceed to Checkout</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAddress">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                resize: "none",
                ...focusStyle
              }}
              onFocus={() => setFocusStyle({
                borderColor: "gray",
                boxShadow: "0 0 0 0.2rem purple"
              })}
              onBlur={() => setFocusStyle({})}
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button
              variant="light"
              style={{ backgroundColor: "purple", color: "white" }}
              type="submit"
              disabled={processing}
            >
              Pay Now ₹ {total}
            </Button>
          </div>
        </Form>
        <Button
          variant="dark"
          style={{
            color: "black",
            background: "none",
            outline: "none",
            border: "none",
          }}
          className="close-btn"
          onClick={onClose}
          disabled={processing}
        >
          Close
        </Button>
      </div>
      {processing && (
        <div className="processing-overlay">
          <div className="processing-content">
            <img
              src={paymentProcessingGif}
              alt="Processing Payment"
              className="processing-gif"
            />
            <p className="thank-you-text">Thank you</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
