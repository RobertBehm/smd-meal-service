import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3 mt-5">
            Copyright &copy; Start My Diet
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
