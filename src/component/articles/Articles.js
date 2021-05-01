import React from "react";
import NewArticle from "../newArticle/NewArticle";
/* style */
import "./articles.css";

const Articles = (props) => {
  return (
    <div className="news">
      {props.article.map((a) => {
        return (
          <div>
            <NewArticle key={a.urlToImage} a={a} />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
