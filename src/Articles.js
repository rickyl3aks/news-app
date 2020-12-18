import React from "react";
import NewArticle from "./NewArticle";

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
