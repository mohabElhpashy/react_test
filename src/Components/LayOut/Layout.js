import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

// import Axios from "axios";

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="#home">Profile</Navbar.Brand>
            <NavDropdown
              variant="pimary"
              title="Info"
              className="profile"
              // id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="post">Share Post </NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="allposts">All posts </NavDropdown.Item>
              <hr />
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="about">about</Nav.Link>
            {/* <Nav.Link href="post">Post</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default Layout;
