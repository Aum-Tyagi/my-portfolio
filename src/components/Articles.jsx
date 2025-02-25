import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import articlesData from "../assets/data/articles.json";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate(); // Used for routing

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <Element name="articles">
      <section id="articles" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-cornell">Articles</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.id}
                onClick={() => navigate(`/articles/${article.id}`)}
                className="h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 relative flex flex-col cursor-pointer bg-white"
              >
                {article.image && (
                  <img
                    className="object-cover w-full h-48 md:h-52"
                    alt={article.title}
                    src={require(`../assets/images/${article.image}`)}
                  />
                )}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Articles;
