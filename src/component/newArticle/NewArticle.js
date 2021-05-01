import React, { useState } from "react";

/* style */
import "./newarticle.css";

const NewArticle = ({ a }) => {
  const [display, setDispaly] = useState(false);
  let time = new Date().toISOString();
  let hour = time.substring(11, 13);
  let newsTime = a.publishedAt.substring(11, 13);
  return (
    <div>
      <div>
        <div className="container" onClick={() => setDispaly(!display)}>
          <img
            src={
              a.urlToImage
                ? a.urlToImage
                : "https://nicl.it/new/wp-content/uploads/2020/07/news-5.jpg"
            }
            alt={a.source.name}
          />
          <h1
            style={{ textAlign: "left", padding: "1rem", fontSize: "1.5rem" }}
          >
            {a.title !== null ? a.title.split("-")[0] : "--not available--"}
          </h1>
          <div className="info">
            <p style={{ display: "inline" }}>
              Date: {a.publishedAt.split("T")[0]}
            </p>
            <p>
              {a.source.name} ·{" "}
              {newsTime < hour
                ? hour - newsTime + " hr. ago"
                : newsTime - hour + " hr. ago"}
            </p>
          </div>

          <div className={!display ? "article" : "animation"}>
            <p style={{ padding: "1rem" }}>
              {a.description !== null ? a.description : "--not available--"}
            </p>
            <hr style={{ margin: "1rem" }} />
            <p style={{ padding: "1rem" }}>
              {String(a.content).substring(0, 50) ===
                String(a.description).substring(0, 50) || a.content === null
                ? null
                : String(a.content).split("[")[0]}
              <a rel="noreferrer" href={a.url} target="_blank">
                Read more
              </a>
            </p>

            <br />
            <br />
            <div className="info">
              <p>
                Written by {a.author !== null ? a.author : "--not available--"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
