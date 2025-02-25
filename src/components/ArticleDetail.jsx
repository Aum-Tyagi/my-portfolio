import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import articlesData from "../assets/data/articles.json";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find((item) => item.id === id);
    setArticle(foundArticle || null);
  }, [id]);

  if (!article) {
    return (
      <div className="text-center text-cornell text-2xl py-10">
        Article Not Found
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-lg md:sticky md:top-20 h-max">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Table of Contents
          </h3>
          <ul>
            {article.sections.map((section, index) => (
              <li
                key={index}
                className="text-cornell hover:underline cursor-pointer py-1"
                onClick={() => {
                  const target = document.getElementById(`section-${index}`);
                  const offset = 80; // Adjust based on your header height
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop - offset,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side: Scrollable Article Content */}
        <article className="w-full md:w-3/4 md:pl-8 overflow-y-auto">
          <Link to="/" className="text-cornell hover:underline mb-4 block">
            ← Back to Articles
          </Link>

          {/* Article Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {article.title}
          </h2>

          {/* Article Image */}
          {article.image && (
            <img
              className="w-full h-1/6 rounded-md mb-6"
              src={require(`../assets/images/${article.image}`)}
              alt={article.title}
            />
          )}

          {/* Article Sections */}
          {article.sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                {section.title}
              </h3>

              {/* Render Paragraph if Available */}
              {section.content && (
                <p className="text-lg text-gray-700">{section.content}</p>
              )}

              {/* Render Subsections if Available */}
              {section.subSections &&
                section.subSections.map((sub, idx) => (
                  <div key={idx} className="mt-4">
                    {/* Render Subheading */}
                    <h4 className="text-xl font-semibold text-gray-800">
                      {sub.subheading}
                    </h4>

                    {/* Render Paragraph if Present */}
                    {sub.content && (
                      <p className="text-lg text-gray-700">{sub.content}</p>
                    )}

                    {/* Render Bullet Points if Available */}
                    {sub.bulletPoints && (
                      <ul className="list-disc list-inside mt-2">
                        {sub.bulletPoints.map((point, idp) => (
                          <li
                            key={idp}
                            className="text-lg text-gray-700"
                            dangerouslySetInnerHTML={{ __html: point }}
                          ></li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ArticleDetail;
