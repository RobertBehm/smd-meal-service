import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import Logo from "../images/my-meals-v3.png";
import Hidden from "@material-ui/core/Hidden";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  console.log(cartstate);

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg bg-white rounded">
        <a className="navbar-brand " href="/">
          <img
            src={Logo}
            alt="brand logo"
            style={{ height: "100px", width: "200px" }}
          />
        </a>
        <Hidden smDown>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i style={{ color: "#0554fe" }} className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {currentUser ? (
                <div className="dropdown mr-4">
                  <a
                    style={{ color: "#013BB9" }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      className="dropdown-item"
                      href="/orders"
                      style={{ color: "#013BB9" }}
                    >
                      Orders
                    </a>
                    <a
                      className="dropdown-item"
                      href="/admin"
                      style={{ color: "#013BB9" }}
                    >
                      <li>Dashboard</li>
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "#013BB9" }}
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Logout</li>
                    </a>
                  </div>
                </div>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              {/*
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
                <i className="fas fa-shopping-cart">
                  <span className="p-1 pb-2">{cartstate.cartItems.length}</span>
            </i> 
              </a>
            </li>
            */}
            </ul>
          </div>
        </Hidden>
        <div>
          <a href="/cart">
            <i className="fas fa-shopping-cart">
              <span className="p-1 pb-2">{cartstate.cartItems.length}</span>
            </i>
          </a>
        </div>
      </nav>
    </div>
  );
}
