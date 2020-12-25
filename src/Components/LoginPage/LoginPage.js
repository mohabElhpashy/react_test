import React, { Component } from "react";
import { Form, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Axios from "axios";

class Login extends Component {
  state = {
    Email: "",
    Password: "",
    dat: [],
  };

  createEmail = (e) => {
    this.setState({ Email: e.target.value });
  };
  createPassword = (e) => {
    this.setState({ Password: e.target.value });
  };
  craeteLogin = () => {
    const Login = {
      Email: this.state.Email,
      Password: this.state.Password,
    };
    Axios.post("http://localhost:4500/login", Login).then((res) => {
      alert("res.data.Firstname");
    });
  };
  render() {
    console.log(this.state.dat);

    return (
      <div className="login">
        <Form>
          <h1>Login please to begin see ur Posts</h1>
          <hr />
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
          <Form.Group controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button onClick={this.craeteLogin} variant="primary" type="submit">
            Submit
          </Button>
          <Nav.Link className="sign" href="signup">
            Sign Up
          </Nav.Link>
        </Form>
      </div>
    );
  }
}

export default Login;
