/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assest/Capture.PNG";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <header class="header">
        <div class="container d-flex align-items-center flex-column">
          <img class="sora" src={img} />
          <h1 class="masthead-heading text-uppercase mb-0">
            What is on your mind?
          </h1>
          <Nav.Link className="loginn" href="login">
            Login
          </Nav.Link>
          if You have Account OR
          <Nav.Link className="sign" href="signup">
            Sign Up
          </Nav.Link>
        </div>
      </header>
    );
  }
}

export default Home;
