import React, { Component } from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";
import Loading from "./Loading";

const lookup = require("country-code-lookup");

class Home extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      isLoading: false,
      country: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const res = await fetch(
        `http://newsapi.org/v2/top-headlines?country=${
          this.state.country ? this.state.country : null
        }&apiKey=9ee9ba23b50b4fd9b2c7d74ec0c3be1b`
      );
      const data = await res.json();
      this.setState({
        isLoading: false,
      });

      setTimeout(() => {
        this.setState({
          article: data.articles,
          isLoading: true,
        });
      }, 1500);

      var count = () => {
        fetch("https://api.countapi.xyz/hit/news_app.git/128")
          .then((res) => res.json())
          .then((res) =>
            this.setState({
              count: res.value,
            })
          );
      };
      count();
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
          maxLength="2"
          title="Two letter country code"
          onChange={(e) => {
            this.setState({ country: e.target.value });
          }}
          onKeyDown={(e) =>
            e.key === "Enter" ? this.fetchData(this.state.country) : null
          }
        />
        <p className="count">You have {100 - this.state.count} requests left</p>
        <div>
          <div style={{ display: "flex" }}>
            {
              <p className={this.state.country.length === 2 ? "country" : null}>
                {this.state.country.length === 2
                  ? lookup.byIso(this.state.country).country
                  : null}
              </p>
            }
          </div>

          {this.state.isLoading ? (
            <div>
              <Articles
                article={this.state.article}
                display={this.state.showArticle}
              />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
