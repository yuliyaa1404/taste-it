import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import ReactPaginate from "react-paginate";
import BlogItems from "../components/BlogItems";
import { connect } from "react-redux";
function Blog({ tabCategory, dispatch }) {
  const [blog, setBlog] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    let getBlogCategory = async () => {
      let blogCategoryData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setBlogCategory(blogCategoryData.blog_categories);
    };
    getBlogCategory();
  }, []);
  useEffect(() => {
    let getBlogData = async () => {
      let blogData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setBlog(blogData.blog);
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(blogData.blog.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(blogData.blog.length / itemsPerPage));
    };
    getBlogData();
  }, []);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blog.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blog.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <section className="lifestyle">
        <h1 className="lifestyle__title title">Blog</h1>
      </section>
      <section className="blog">
        <div className="container">
          <div className="blog__top">
            <ul className="blog__list">
              <li
                onClick={(e) => {
                  dispatch({
                    type: "TABCATEGORY",
                    payload: 0,
                  });
                  handlePageClick();
                }}
                data-id="0"
                id="0"
                className={tabCategory == 0 ? "blog-active" : ""}
              >
                Bütün postlar
              </li>
              {blogCategory.map((a) => (
                <li
                  onClick={(e) => {
                    dispatch({
                      type: "TABCATEGORY",
                      payload: a.id,
                    });
                    handlePageClick();
                  }}
                  id={a.id}
                  key={a.id}
                  className={tabCategory == a.id ? "blog-active" : ""}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="blog__bottom"></div>
          <div className="blog__bottom">
            {tabCategory != 0 ? (
              blog
                .filter((t) => t.category == tabCategory)
                .map((a, b) => (
                  <div key={b} className="blog__item">
                    <div className="blog__img">
                      <img src={a.image} alt="" />
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
                              <p>{b.name}</p>
                            ))}
                        </div>
                      </div>
                      <div className="blog__date">{a.date}</div>
                    </div>
                  </div>
                ))
            ) : (
              <>
                <BlogItems currentItems={currentItems} />
                <div className="blog__pagination">
                  {" "}
                  {pageCount && (
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="banner">
        <div className="banner__wrapper">
          <h2 className="banner__title title">Bizimlə əlaqə saxlayın!</h2>
          <Link to="/contact_us">
            <p className="banner__btn btn-bg">Sorğu göndər</p>
          </Link>
        </div>
      </div>
    </>
  );
}
const t = (a) => {
  return {
    tabCategory: a.tabCategory,
  };
};
export default connect(t)(Blog);
