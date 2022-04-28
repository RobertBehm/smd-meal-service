import styled from "styled-components";
import { colors } from "../utils/theme";
import React from "react";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* column 1
        <Hidden smDown>
          <div>
            <Img
              fluid={data.file.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: '125px' }}
            />
          </div>
        </Hidden>
         */}
        {/* column 2 */}
        <div className="col">
          <h4>Store Location</h4>
          <ul className="list-menu">
            <li className="list-item">1380 Hartford Ave</li>
            <li className="list-item">Johnston RI 02919</li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="col">
          <h4>Contact Us</h4>
          <ul className="list-menu">
            <li className="list-item">
              <a href="tel:(401)632-9326" className="contact-info">
                401-632-9326
              </a>
            </li>
            <li className="list-item">
              <a href="mailto:startmydiet@gmail.com" className="contact-info">
                startmydiet@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className="col">
          <h4>Store Hours</h4>
          <ul className="list-menu">
            <li className="list-item">
              Monday-Friday: <br />
              11AM-8PM
            </li>
            <li className="list-item">
              Saturday:
              <br />
              11AM-5PM
            </li>
            <li className="list-item">Sunday: 11AM-3PM</li>
          </ul>
        </div>
        {/* column 5 
        <div className="col">
          <h4>Follow Us</h4>
          <ul className="social-wrapper">
            <li>
              <IconButton
                component="a"
                disableRipple
                href="https://www.facebook.com/dippytees"
              >
                <img src={facebook} alt="facebook" className="img-styles" />
              </IconButton>
            </li>
            <li>
              <IconButton
                component="a"
                disableRipple
                href="https://www.instagram.com/dippytees"
              >
                <img src={instagram} alt="instagram" className="img-styles" />
              </IconButton>
            </li>
          </ul>
        </div>
        */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${colors.primary};
  margin-top: 600px;

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }

  .container {
    display: flex;
    //grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;

    @media (max-width: 940px) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-bottom: 10px;
      margin-top: 40px;
    }
  }

  .list-menu {
    text-align: center;
    padding: 0;
  }

  .list-item {
    list-style: none;
    //margin: px;
    text-align: center;
    font-size: 18px;
    color: white;
    &:hover {
      color: white;
    }

    @media (max-width: 1200px) {
      font-size: 1em;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 24px;
    margin: 1.2em;
    color: white;
    text-transform: uppercase;
    &:hover {
      color: white;
    }

    @media (max-width: 1200px) {
      font-size: 1em;
    }
  }

  .img-styles {
    margin-top: 0px;
    padding: 0px;
    text-align: start;

    @media (max-width: 1060px) {
      height: 1em;
      width: 1em;
    }
  }

  .social-wrapper {
    display: flex;
  }

  .links {
    text-align: center;
    text-decoration: none;
    color: white;
    &:hover {
      color: white;
    }
  }

  .contact-info {
    text-decoration: none;
    color: white;
    &:hover {
      color: white;
    }
  }
`;

export default Footer;
