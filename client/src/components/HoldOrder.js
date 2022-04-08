import React from "react";
import { Form, Popover, OverlayTrigger, Button } from "react-bootstrap";

function HoldOrder() {
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
        <Form.Control type="text" placeholder="Name" required />
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Email" required />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Address" rows={3} required />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="City" rows={3} required />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="State" rows={3} required />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Phone" required />
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
      <div className="d-flex justify-content-center">
        <button
          className="btn"
          type="submit"
          style={{ width: "300px", marginTop: "15px" }}
        >
          Submit Order
        </button>
      </div>
    </Form>
  );
}

export default HoldOrder;
