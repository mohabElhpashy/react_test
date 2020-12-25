import React, { Component } from "react";
// import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Signup from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import "./App.css";
import Nav from "./Components/LayOut/Layout";
import Post from "./Components/Post/Post";
import Allposts from "./Components/Allposts/Allposts";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/allposts" component={Allposts} />
        </Switch>
      </Router>
    );
  }
}

export default App;
