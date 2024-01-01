import React, { useEffect, useState } from "react";

const NewsBoard = ({category}) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d983125b61b54611b864dae01434cc13`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));

  }, [category]);

  return (
    <>
      <h2 className="text-center p-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="container">
        <div className="row">
          {article.map((news, index) => (
            <div key={index} className="col-lg-4 col-md-3 col-sm-1">
              <div className="card mb-2 bg-dark text-light" style={{ maxWidth: "360px" }}>
                <img style={{width: "360px", height: "220px"}} src={news.urlToImage} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">
                    {news.description}
                  </p>
                  <a href={news.url} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsBoard;
