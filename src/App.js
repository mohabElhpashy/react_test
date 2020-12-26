import React from "react";
// import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Signup from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import "./App.css";
import Nav from "./Components/LayOut/Layout";
import Post from "./Components/Post/Post";
import Allposts from "./Components/Allposts/Allposts";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login"  exact component={Home} />
          <Route path="/post" exact component={Post} />
          <Route path="/allposts" exact component={Allposts} />
        </Switch>
      </Router>
    );
  }
}

export default App;
