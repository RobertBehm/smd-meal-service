import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import { emptyCart } from "../actions/cartActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

import { Modal } from "react-bootstrap";
import HoldOrder from "./HoldOrder";
import { InitiatedStripeCheckout } from "../utils/facebook/facebookPixelEvent";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();

  const trackCardPayment = () => {
    InitiatedStripeCheckout();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(emptyCart());
  };
  const handleShow = () => setShow(true);

  function tokenHander(token) {
    dispatch(placeOrder(token, subtotal));
    dispatch(emptyCart());
  }

  return (
    <div className="checkout-button-container">
      <div>
        <button className="btn" onClick={handleShow}>
          Payment Options
        </button>
      </div>
      <div>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="Order Placed Successfully" />}

        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          billingAddress
          token={tokenHander}
          currency="USD"
          stripeKey={process.env.REACT_APP_STRIPE_PK}
        >
          <button className="btn ml-3" onClick={trackCardPayment}>
            Pay With Card
          </button>
        </StripeCheckout>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <p style={{ color: "#808080" }}>
              Fill out the form below and choose your payment option.
            </p>
            <p style={{ color: "#808080" }}>
              After payment is confirmed, I will call you to work out a time and
              date for your meal delivery...
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HoldOrder handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer class="d-flex justify-content-between align-items-end">
          <div className="ml-3 mb-3 mt-5">
            <p className="mb-0" style={{ color: "#808080" }}>
              If you have any questions
              <br />
              Contact Us
            </p>
            <span style={{ color: "#808080" }}>401-632-9326</span>
          </div>
          <div>
            <i
              className="fa fa-times-circle"
              style={{
                fontSize: "36px",
                color: "#808080",
                cursor: "pointer",
                margin: "5px",
              }}
              onClick={handleClose}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
