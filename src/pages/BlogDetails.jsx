import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import { connect } from "react-redux";
function BlogDetails({ dispatch }) {
  const { blogId } = useParams();
  const params = useParams();
  const nav = useNavigate();
  const [blog, setBlog] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  useEffect(() => {
    let getBlogData = async () => {
      let dataBlog = await fetch(
        `http://localhost:7700/blog/${blogId}`
      ).then((a) => a.json());
      setBlog(dataBlog);
    };
    getBlogData();
  }, []);
  useEffect(() => {
    let getBlogCategory = async () => {
      let blogCategoryData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setBlogCategory(blogCategoryData.blog_categories);
    };
    getBlogCategory();
  }, []);
  const demoClick = () => {
    dispatch({
      type: "TABCATEGORY",
      payload: blog.category,
    });
    nav("/blog");
  };
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <section className="lifestyle">
        <h1 className="lifestyle__title title">Blog</h1>
      </section>
      <section className="read">
        <div className="container">
          <div className="read__wrapper">
            <div className="read__top">
              <div className="read__date">{blog.date}</div>
              <h1 className="read__title title">{blog.name}</h1>
              <p className="read__label subtitle">{blog.subtitle}</p>
              <div className="read__img">
                <img src={blog.image} alt="" />
              </div>
              <p className="read__text text">{blog.text_1}</p>
              <h5 className="read__label">Asanlıqla dizayn edin</h5>
              <div className="read__marked text">{blog.text_marked}</div>
              <p className="read__text text">{blog.text_2}</p>
              <h5 className="read__label">Müvafiq məzmun yaradın</h5>
              <p className="read__text text">{blog.content}</p>
              <h5 className="read__label">İlham alın</h5>
              <p className="read__text text">{blog.inspired}</p>
            </div>
            <div className="read__bottom">
              <div className="read__social">
                <p>
                  <i className="fa-brands fa-facebook-f"></i>
                </p>
                <p>
                  <i className="fa-brands fa-instagram"></i>
                </p>
                <p>
                  <i className="fa-brands fa-twitter"></i>
                </p>
                <p>
                  <i className="fa-brands fa-linkedin-in"></i>
                </p>
              </div>
              <div onClick={demoClick} className="read__category">
                {blogCategory
                  .filter((t) => t.id == blog.category)
                  .map((a) => (
                    <p key={a.id}>{a.name}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect()(BlogDetails);
