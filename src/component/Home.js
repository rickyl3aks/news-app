import React, { Component } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";

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
    try {
      const res = await fetch(
        `http://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=9ee9ba23b50b4fd9b2c7d74ec0c3be1b`
      );
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
  };

  render() {
    return (
      <div>
        <h1 id="title" style={{ textAlign: "center", margin: "2rem" }}>
          Get News in real time in the local language! 📰
        </h1>

        <Navbar />
        <input
          className="input"
          type="text"
          placeholder="Search for country...(Country code)"
          maxlength="2"
          title="Two letter country code"
          onChange={(e) => {
            this.setState({ country: e.target.value });
          }}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? this.fetchData(
                  this.state.country ? this.state.country : alert("sotty")
                )
              : null
          }
        />
        <div style={{ display: "flex" }}>
          <p className={this.state.country.length === 2 ? "country" : null}>
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
          <h1 style={{ textAlign: "center", padding: "1rem" }}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Home;
