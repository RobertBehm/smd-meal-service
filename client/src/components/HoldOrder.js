import React, { useEffect, useState } from "react";
import { Form, Popover, OverlayTrigger, Button } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../actions/customerAction";
import Swal from "sweetalert2";
import {
  SubmittedOrderForm,
  ClickedPaymentOptions,
} from "../utils/facebook/facebookPixelEvent";
import { falseDelivery, trueDelivery } from "../actions/deliveryAction";

function HoldOrder({ handleClose }) {
  useEffect(() => {
    ClickedPaymentOptions();
  }, []);

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const delivery = useSelector((state) => state.deliveryReducer.delivery);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

  const [checked, setChecked] = useState(false);

  const isDelivery = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      dispatch(trueDelivery());
    } else {
      dispatch(falseDelivery());
    }
  };

  const dispatch = useDispatch();

  const addcustomerstate = useSelector((state) => state.addMealReducer);

  function formHandler(e) {
    e.preventDefault();

    const customer = {
      name,
      email,
      address,
      city,
      state,
      phone,
      foods: cartItems,
      deliveryCharges: checked,
    };

    console.log(customer);
    dispatch(addCustomer(customer));
    SubmittedOrderForm();
    handleClose();

    Swal.fire("Success", "Order Submited", "success");
  }

  const popoverRight1 = (
    <Popover id="popover-positioned-right" title="Popover right">
      <strong style={{ padding: "5px" }}>Cashapp: $DietMyStart</strong>
      <br />
      <p style={{ fontSize: "10px", padding: "0px 5px" }}>
        Submit form after payment is made, thanks
      </p>
    </Popover>
  );
  const popoverRight2 = (
    <Popover id="popover-positioned-right" title="Popover right">
      <strong style={{ padding: "5px" }}>Venmo: @Rafe-Mekhanjian</strong>
      <br />{" "}
      <p style={{ fontSize: "10px", padding: "0px 5px" }}>
        Submit form after payment is made, thanks
      </p>
    </Popover>
  );

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address"
          rows={3}
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City"
          rows={3}
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="State"
          rows={3}
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "#0554fe" }}
              checked={checked}
              onChange={isDelivery}
            />
          }
          label="Delivery + $12.00"
        />
      </Form.Group>

      <Form.Group>
        <div className="mb-3">
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popoverRight1}
          >
            <Button style={{ width: "100px" }}>Cashapp</Button>
          </OverlayTrigger>
        </div>
        <div>
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popoverRight2}
          >
            <Button style={{ width: "100px" }}>Venmo</Button>
          </OverlayTrigger>
        </div>
      </Form.Group>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 style={{ color: "#003C55" }}>
          SubTotal : $
          {delivery
            ? subtotal + 0
            : delivery === undefined
            ? subtotal + 0
            : subtotal + 12}
        </h3>
        <button
          className="btn"
          type="submit"
          onClick={formHandler}
          style={{ width: "300px", marginTop: "15px" }}
        >
          Submit Order
        </button>
      </div>
    </Form>
  );
}

export default HoldOrder;
