import styled from "styled-components";
import { colors } from "../utils/theme";

const Hero = () => {
  return (
    <Wrapper>
      <h4 className="hero-header">We Deliver</h4>
      <span className="hero-subheader">
        within 30 miles for a 12.00 delivery fee
      </span>
      <div className="hero-body-container">
        <p className="hero-body">Spend $100, save 5%</p>
        <p className="hero-body">Spend $200, save 10%.</p>
      </div>
      <div className="store-info-container">
        <p className="hero-store-info">1380 Hartford Ave</p>
        <p className="hero-store-info">Johnston, RI</p>
        <p className="hero-store-info">401-632-9326</p>
      </div>
    </Wrapper>
  );
};
export default Hero;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  padding-top: 20px;

  .hero-header {
    color: white;
    font-size: 48px !important;
    font-weight: bold !important;
  }

  .hero-subheader {
    color: white;
  }

  .hero-body-container {
    margin-top: 30px;
  }

  .hero-body {
    color: white;
    padding: 0;
    margin-bottom: 0;
  }

  .hero-store-info {
    color: white;
    margin: 0;
  }

  .store-info-container {
    margin: 25px;
  }
`;
