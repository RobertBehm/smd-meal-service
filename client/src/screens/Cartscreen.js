import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import { ViewedCart } from "../utils/facebook/facebookPixelEvent";

export default function Cartscreen() {
  useEffect(() => {
    ViewedCart();
  }, []);

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce(
    (x, item) => x + item.quantity * item.prices[0][item.size],
    0
  );
  const delivery = useSelector((state) => state.deliveryReducer.delivery);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ height: "100%" }}>
        <div className="row justify-content-center p-2">
          <div className="col-md-6">
            <h2 style={{ fontSize: "40px" }}>My Cart</h2>

            {cartItems.map((item) => {
              return (
                <div className="flex-container mt-5">
                  <div className="text-left m-1 w-100">
                    <h5>
                      {item.name} [{item.size}]
                    </h5>
                    <h5>
                      Price : {item.quantity} * {item.prices[0][item.size]} = $
                      {item.quantity * item.prices[0][item.size]}
                    </h5>
                    <h5 style={{ display: "inline" }}>Quantity : </h5>
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(
                            item,
                            item.quantity + 1,
                            item.size,
                            "ADD_ONE"
                          )
                        );
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(
                            item,
                            item.quantity - 1,
                            item.size,
                            "SUB_ONE"
                          )
                        );
                      }}
                    ></i>
                  </div>

                  <div className="m-1 w-100">
                    <img
                      src={item.image}
                      style={{ height: "80px", height: "80px" }}
                    />
                  </div>

                  <div className="m-1 w-100">
                    <i
                      className="fa fa-trash mt-5"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-4 text-right mt-5">
            <h2 style={{ fontSize: "45px" }}>
              SubTotal : $
              {delivery
                ? subtotal + 0
                : delivery === undefined
                ? subtotal + 0
                : subtotal + 12}
            </h2>
            <Checkout subtotal={subtotal} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
