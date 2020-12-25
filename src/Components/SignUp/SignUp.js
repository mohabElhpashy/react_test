import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import Axios from "axios";

class Signup extends Component {
  state = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
  };

  createfirstname = (e) => {
    this.setState({ Firstname: e.target.value });
  };
  createLastname = (e) => {
    this.setState({ Lastname: e.target.value });
  };
  createEmail = (e) => {
    this.setState({ Email: e.target.value });
  };
  createPassword = (e) => {
    this.setState({ Password: e.target.value });
  };

  craeteSignup = () => {
    const Signup = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Email: this.state.Email,
      Password: this.state.Password,
    };
    Axios.post("http://localhost:4500/signup", Signup).then((err) => {
      console.log("done");
    });
  };
  render() {
    return (
      <div className="SignUp">
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>First-name</Form.Label>
            <Form.Control
              onChange={this.createfirstname}
              type="First-name"
              placeholder="First-name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last-name</Form.Label>
            <Form.Control
              onChange={this.createLastname}
              type="Last-name"
              placeholder="Last-name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.createEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.createPassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button
            onClick={this.craeteSignup}
            variant="primary"
            type="submit"
            href="login"
          >
            Sign in
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
