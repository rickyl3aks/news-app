import React, { Component } from "react";

/* style */
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="skeleton">
        <div className="card">
          <div className="card_image loading"></div>
          <div className="card_title loading"></div>
          <div className="card_description loading"></div>
        </div>
        <div className="card">
          <div className="card_image loading"></div>
          <div className="card_title loading"></div>
          <div className="card_description loading"></div>
        </div>
        <div className="card">
          <div className="card_image loading"></div>
          <div className="card_title loading"></div>
          <div className="card_description loading"></div>
        </div>
      </div>
    );
  }
}

export default Loading;
