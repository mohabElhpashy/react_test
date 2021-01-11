import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Allposts.css";
import Axios from "axios";
import img from "../../../src/assest/two.PNG";

class Allposts extends Component {
  state = {
    persons: [],
  };
  Deletepost = (index) => {
    Axios.delete(`http://localhost:4500/admin/delete/${index}`).then((res) => {
      alert("deleted");
    });
  };
  editpost = (index) => {
    Axios.get(`http://localhost:4500/admin/edit/${index}`).then((res) => {
      alert("edited");
    });
  };
  componentDidMount() {
    Axios.get("http://localhost:4500/admin/all-posts").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    const mapp = this.state.persons.map((person, index) => {
      return (
        <div key={index} className="card">
          <Card className="caard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{person.title}</Card.Title>
              <hr />
              <Card.Text className="textarea">{person.body}</Card.Text>
            </Card.Body>
            <Button
              href="post"
              onClick={this.editpost.bind(this, person._id)}
              variant="primary"
            >
              edit
            </Button>
            <Button
              onClick={this.Deletepost.bind(this, person._id)}
              variant="danger"
            >
              delete Post
            </Button>
          </Card>
          {/* <button onClick={this.editPost(person._id)} variant="danger">
              Delete
            </button> */}
        </div>
      );
    });
    return <ul>{mapp}</ul>;
  }
}

export default Allposts;
