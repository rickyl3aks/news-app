import React, { Component } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const lookup = require("country-code-lookup");

class Home extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      isLoading: false,
      country: "gbb",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=9ee9ba23b50b4fd9b2c7d74ec0c3be1b`
    );
    try {
      const data = await res.json();
      this.setState({
        article: data.articles,
        isLoading: true,
      });
    } catch (e) {
      this.setState({
        error: true,
      });
      alert("sorry");
    }
    <Error />;
  };

  render() {
    return (
      <div>
        <h1 id="title" style={{ textAlign: "center", margin: "2rem" }}>
          Get News in real time in the local language! 📰
        </h1>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <input
          className="input"
          type="text"
          placeholder="Search for country.."
          onChange={(e) => {
            this.setState({ country: e.target.value });
          }}
          onKeyDown={(e) =>
            e.key === "Enter" ? this.fetchData(this.state.country) : null
          }
        ></input>
        <div style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "1.5rem",
              justifyContent: "center",
              margin: "2rem auto",
              padding: "0.5rem 1rem",
              textAlign: "center",
              border: "8px solid #fff",
            }}
          >
            {this.state.country.length === 2
              ? lookup.byIso(this.state.country).country
              : null}
          </p>
        </div>

        {this.state.isLoading ? (
          <div>
            <Articles
              article={this.state.article}
              display={this.state.showArticle}
            />
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Home;