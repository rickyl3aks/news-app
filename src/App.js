import React, { Component } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
