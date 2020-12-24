import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
