import React, { Component } from "react";

/* style */
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            margin: 20,
          }}
        >
          <div>
            <div className="skeleton">
              <div className="card">
                <div className="card__image loading"></div>
                <div className="card__title loading"></div>
                <div className="card__description loading"></div>
              </div>
              <div className="card">
                <div className="card__image loading"></div>
                <div className="card__title loading"></div>
                <div className="card__description loading"></div>
              </div>
              <div className="card">
                <div className="card__image loading"></div>
                <div className="card__title loading"></div>
                <div className="card__description loading"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
