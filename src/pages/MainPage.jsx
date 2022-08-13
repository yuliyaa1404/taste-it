import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "../components/Slider";
import SliderMarket from "../components/SliderMarket";
import ModalSearch from "../components/ModalSearch";
import { connect } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import QuickView from "../components/QuickView";

function MainPage({ dispatch}) {
  const [inputValue, setInputValue] = useState("");
  const [modalSearch, setModalSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [marketCategory, setMarketCategory] = useState([]);
  const [market, setMarket] = useState([]);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [blog, setBlog] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState([]);
  useEffect(() => {
    let getMarketiCategory = async () => {
      let dataCategory = await fetch(
        `http://localhost:7700/market-categories`
      ).then((a) => a.json());
      setMarketCategory(dataCategory);
    };
    getMarketiCategory();
  }, []);
  useState(() => {
    let getMarket = async () => {
      let data = await fetch(`http://localhost:7700/market`).then((a) =>
        a.json()
      );
      setMarket(data);
    };
    getMarket();
  }, []);
  useEffect(() => {
    let getBlogCategory = async () => {
      let blogCategoryData = await fetch(
        `http://localhost:7700/blog_categories`
      ).then((a) => a.json());
      setBlogCategory(blogCategoryData);
    };
    getBlogCategory();
  }, []);
  useEffect(() => {
    let getBlogData = async () => {
      let blogData = await fetch(`http://localhost:7700/blog`).then((a) =>
        a.json()
      );
      setBlog(blogData);
    };
    getBlogData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:7700/products`).then((a) =>
        a.json()
      );
      setProducts(data);
    };
    getData();
  }, []);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      let dataCategory = await fetch(
        `http://localhost:7700/categories`
      ).then((a) => a.json());
      setCategories(dataCategory);
    };
    getCategory();
  }, []);
  const openModalPanel1 = () => {
    dispatch({
      type: "HEADER_SHOW",
      payload: false,
    });
    setOpenModal1(true);
  };
  const openModalPanel2 = () => {
    dispatch({
      type: "HEADER_SHOW",
      payload: false,
    });
    setOpenModal2(true);
  };
  useEffect(() => {
    let t = blog;
    let s = [];
    if (blog.length) {
      for (let i = 0; i < 3; i++) {
        // setSelectedBlog(blog[i])
        // setSelectedBlog.push(blog[i])
        s.push(blog[i]);
      }
      // console.log(s)
      t = s;
      setSelectedBlog(t);
    }
  }, [blog]);
  useEffect(() => {
    if (openModal1 || openModal2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openModal1, openModal2]);
  return (
    <>
      <ModalSearch modal={modalSearch} />
      <BasketIcon />
      <FavoritesIcon />
      <QuickView />

      <section className="delicious">
        <div className="delicious__wrapper">
          <h1 className="delicious__title">Delicious</h1>
          <h3 className="delicious__subtitle">
            Bizim yeməklərimiz <br /> ən dadlıdır!
          </h3>
          <div className="delicious__btns">
            <Link to="/recipes">
              <p className="delicious__recipe btn-bg">
                Reseptlər
              </p>
            </Link>
            <Link to="/market">
              <p className="delicious__market btn-bg">
                Market
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="shop">
        <h1 className="shop__title title">Haqqımızda</h1>
        <div className="shop__wrapper">
          <div className="shop__image">
            <img
              src="https://domstrousam.ru/wp-content/uploads/2020/10/234523452352352.jpg"
              alt=""
            />
          </div>
          <div className="shop__body">
            <p className="shop__subtitle subtitle">
              Zövqünüzə uyğun bir menyu seçin və ya dizaynerdən öz menyunu
              toplayın və əvvəlcədən qablaşdırılmış inqrediyentlər və reseptlər
              qutusunu əldə edin.
            </p>
            <div className="shop__inner">
              <div className="shop__icon">
                <i className="fa-solid fa-pot-food"></i>
              </div>
              <div className="shop__info">
                <h5 className="shop__label">Menyu və yeməklərinizi seçin</h5>
                <p className="shop__text">
                  Hər həftə aşpazlardan və diyetoloqlardan 60 yeni resept
                </p>
              </div>
            </div>
            <div className="shop__inner">
              <div className="shop__icon">
                <i className="fa-solid fa-truck-bolt"></i>
              </div>
              <div className="shop__info">
                <h5 className="shop__label">Təzə yemək alın</h5>
                <p className="shop__text">
                  Tərkibi reseptlər üçün qablaşdırılıb, çatdırılma pulsuzdur
                </p>
              </div>
            </div>
            <div className="shop__inner">
              <div className="shop__icon">
                <i className="fa-solid fa-hat-chef"></i>
              </div>
              <div className="shop__info">
                <h5 className="shop__label">15-40 dəqiqə bişirin</h5>
                <p className="shop__text">
                  Addım-addım şəkil reseptləri və hazırlanmış məhsullarla
                </p>
              </div>
            </div>
            <Link to="/about_market">
              <p className="shop__btn wave-btn ">
                <span className="wave-btn__text">Daha ətraflı</span>
                <span className="wave-btn__waves"></span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="food">
        <div className="container">
          <div className="food__head">
            <Link to="/recipes">
              <div className="food__title title">
                Yeməklər{" "}
                <span className="slide-icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="food__row">
            <Slider
              inputValue={inputValue}
              key={products.map((a) => a.id)}
              slides={products}
            />
          </div>
        </div>
      </section>
      <section className="inside">
        <div className="container">
          <h2 className="inside__title title">
            Bizim dəstimizlə siz ailənizlə daha çox vaxt keçirə biləcəksiniz
          </h2>
          <h5 className="inside__subtitle subtitle">
            Və yemək istirahət və ilham olacaq
          </h5>
          <div className="inside__wrapper">
            <div className="inside__body">
              <h5 className="inside__label label">Dəstin içərisində:</h5>
              <div className="inside__content">
                <div className="inside__item">
                  <div className="inside__first">
                    <p className="inside__digit">1</p>
                    <p className="inside__text">
                      Başlayanlar üçün belə bişirmək asan olan aşpazdan
                      reseptlər
                    </p>
                  </div>
                  <div
                    className="inside__second"
                    onClick={() => openModalPanel1(true)}
                  >
                    Reseptləri necə hazırlayırıq?
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <div className="inside__item">
                  <div className="inside__first">
                    <p className="inside__digit">2</p>
                    <p className="inside__text">
                      Resept üzrə ölçülmüş təzə ingredientlər
                    </p>
                  </div>

                  <div
                    className="inside__second"
                    onClick={() => openModalPanel2(true)}
                  >
                    Dəstləri necə hazırlayırıq?
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside__image">
              <img
                src="https://i.pinimg.com/originals/30/7c/67/307c675c412a10889950cd4454f88d26.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          openModal1 ? "modal__first opened modal" : "modal__first modal"
        }
        onClick={() => {
          dispatch({
            type: "HEADER_SHOW",
            payload: true,
          });
          setOpenModal1(false);
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal__first-wrapper"
        >
          <div
            onClick={() => {
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
              setOpenModal1(false);
            }}
            className="modal__first-close"
          >
            &times;
          </div>
          <h3 className="modal__first-title">Reseptləri necə hazırlayırıq?</h3>
          <div className="modal__first-img">
            <img
              src="https://avatars.mds.yandex.net/get-zen_doc/3770780/pub_5f16c2caf3a8f4186213af21_5f16c2eda0fe8b6202b69562/scale_1200"
              alt=""
            />
          </div>
          <p className="modal__first-text">
            Reseptlər aşpaz tərəfindən hazırlanır və istehsalımızda işlənir.
            Dadırıq, qiymətləndiririk və şəkil çəkdiririk.
          </p>
          <div className="modal__first-img">
            <img
              src="http://kurgan.besplatnee.net/storage/media/photos/adverts/528020/d2f836b65a95691b0bd323bc671b29b2.jpeg"
              alt=""
            />
          </div>
          <div className="modal__first-text">
            <p>
              Texnoloqlardan ibarət komanda yeməyin dadını, məhsulların
              təhlükəsizliyini qiymətləndirir, müştərilər üçün təlimatlar yazır,
              həmçinin resepti ev mətbəxində yeməyi hazırlamağın nə qədər asan
              olduğunu yoxlayan sınaqçılara göndərir.
            </p>
            <p>
              Və yalnız belə bir sübut edilmiş və başa düşülən resepti sizə
              göndəririk.
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          openModal2 ? "modal__second opened modal" : "modal__second modal"
        }
        onClick={() => {
          dispatch({
            type: "HEADER_SHOW",
            payload: true,
          });
          setOpenModal2(false);
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal__second-wrapper"
        >
          <div
            onClick={() => {
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
              setOpenModal2(false);
            }}
            className="modal__second-close"
          >
            &times;
          </div>
          <h3 className="modal__second-title">Dəstləri necə hazırlayırıq?</h3>
          <div className="modal__second-img">
            <img
              src="https://balashover.ru/picture/news/24457_d17e26c8734ce0d500bd43b447d5d6c7.png"
              alt=""
            />
          </div>
          <p className="modal__second-text">
            Dəstlər üçün GMO, trans yağlar və konservantlar olmayan təmiz
            tərkibli məhsulları seçirik.
          </p>
          <div className="modal__second-img">
            <img
              src="https://s.sakh.com/i/alg/market/2016/05/04/d701223450b122f96407b561b30c5b6e.jpeg"
              alt=""
            />
          </div>
          <div className="modal__second-text">
            Etibarlı tədarükçülərdən məhsullar alırıq və onları elə hazırlayırıq
            ki, bişirmək sizin üçün asan olsun: biz ərzaqları qablaşdırırıq,
            tərəvəzləri çeşidləyirik, balıqları təmizləyirik, ət doğrayırıq və
            qiymə hazırlayırıq. İstehsalımızdan videoya baxın
          </div>
        </div>
      </div>
      <section
        className="plan"
        style={{ backgroundImage: `url(/img/main_banner_1.webp)` }}
      >
        <div className="plan__content">
          <h2 className="plan__title">
            Hər zövqə uyğun unikal və dadlı reseptlər tapa bilərsiniz.
          </h2>
          <p className="plan__text">Reseptlər ilə tanış ola bilərsiniz</p>
          <Link to="/search">
            <p className="plan__btn wave-btn ">
              <span className="wave-btn__text">Resepltərə keçid</span>
              <span className="wave-btn__waves"></span>
            </p>
          </Link>
        </div>
      </section>
      <section className="food">
        <div className="container">
          <div className="food__head">
            <Link to="/market">
              <div className="food__title title">
                Market{" "}
                <span className="slide-icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
          <div className="food__row">
            <SliderMarket
              inputValue={inputValue}
              key={market.map((a) => a.id)}
              market={market}
            />
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h1 className="news__title title">Blog</h1>
          <div className="news__row">
            {selectedBlog &&
              selectedBlog.map((a) => (
                <div key={a.id} className="news__item">
                  <div className="news__img">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="news__body">
                    <div className="news__info">
                      <div className="news__date">{a.date}</div>
                      <Link to="/blog">
                        <div className="news__category">
                          {blogCategory
                            .filter((t) => t.id == a.category)
                            .map((b) => (
                              <p>{b.name}</p>
                            ))}
                        </div>
                      </Link>
                    </div>
                    <Link to={`/blog_details/${a.id}`}>
                      <div className="news__name">
                        {a.name}
                      </div>
                    </Link>
                    <div className="news__subtitle">{a.subtitle}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const t = (a) => a;
export default connect(t)(MainPage);
