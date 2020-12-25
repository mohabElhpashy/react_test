import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Post.css";
import Axios from "axios";

class Post extends Component {
  state = {
    title: "",
    body: "",
  };

  createtitle = (e) => {
    this.setState({ title: e.target.value });
  };

  createbody = (e) => {
    this.setState({ body: e.target.value });
  };
  craetePOst = () => {
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    Axios.post("http://localhost:4500/admin/create-post", post).then((err) => {
      console.log("done");
    });
  };
  render() {
    return (
      <div className="Post">
        <div className="form">
          <Form>
            <h1>Create your Post</h1>
            <hr />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.createtitle}
                type="title"
                placeholder="Enter-title"
                required
              />
            </Form.Group>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Body</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="What is on Ur mind ?"
                onChange={this.createbody}
              ></textarea>
            </div>

            <Button onClick={this.craetePOst} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Post;
