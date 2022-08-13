import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function BlogItems({ currentItems }) {
  const [blog, setBlog] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    let getBlogCategory = async () => {
      let blogCategoryData = await fetch(
        `http://localhost:7700/blog_categories`
      ).then((a) => a.json());
      setBlogCategory(blogCategoryData);
    };
    getBlogCategory();
  }, [currentItems]);
  useEffect(() => {
    let getBlogData = async () => {
      let blogData = await fetch(`http://localhost:7700/blog`).then((a) =>
        a.json()
      );
      setBlog(blogData);
    };
    getBlogData();
  }, [currentItems]);
  return (
    <>
      {
          currentItems.map((a, b) => (
            <div key={a.name} className="blog__item">
              <div className="blog__img">
                <img src={a.image} alt="" />
                <div className="blog__text">{a.name}</div>
              </div>
              <div className="blog__content">
                <Link to={`/blog_details/${a.id}`}>
                  <h3 className="blog__title">{a.name}</h3>
                </Link>
                <p className="blog__subtitle">{a.subtitle}</p>
                <div className="blog__info">
                  <div className="blog__box">
                    <div className="blog__view">0 baxış</div>
                    <div className="blog__comment">0 şərh</div>
                  </div>
                  <div className="blog__category">
                    {blogCategory
                      .filter((t) => t.id == a.category)
                      .map((b) => (
                        <p key={b.id}>{b.name}</p>
                      ))}
                  </div>
                </div>
                <div className="blog__date">{a.date}</div>
              </div>
            </div>
          ))}
    </>
  );
}

const t = (a) => {
  return {
    tabCategory: a.tabCategory,
  };
};
export default connect(t)(BlogItems);
