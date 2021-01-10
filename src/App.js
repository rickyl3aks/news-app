import React, { Component } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";

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
