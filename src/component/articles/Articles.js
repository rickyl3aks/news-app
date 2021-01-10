import React from "react";
import NewArticle from "../newArticle/NewArticle";
/* style */
import "./articles.css";

function Articles(props) {
  return (
    <div className="news">
      {props.article.map((a) => {
        return <NewArticle key={a.title} a={a} />;
      })}
    </div>
  );
}

export default Articles;
