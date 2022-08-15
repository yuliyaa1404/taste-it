import { Link, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { useState, useEffect, useRef } from "react";
import ReactStars from "react-stars";
import { connect } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import ScrollToTop from "react-scroll-to-top";
import QuickView from "../components/QuickView";
import Login from "../components/Login";


function Details({ dispatch, favorite }) {
  window.localStorage.setItem("favorite", JSON.stringify(favorite));
  const ref = useRef(null);
  const [login, setLogin] = useState(false);
  const ratingChanged = (newRating) => {};
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    let getProducts = async () => {
      let data = await fetch(`http://localhost:7700/products/${id}`).then((a) =>
        a.json()
      );
      setProduct(data);
    };
    getProducts();
  }, []);
  useEffect(() => {
    let getReviews = async () => {
      let reviewsData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setReviews(reviewsData.reviews);
    };
    getReviews();
  }, []);
  useEffect(() => {
    let getRelated = async () => {
      let relatedData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setRelated(relatedData.products);
    };
    getRelated();
  }, []);
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
    useEffect(() => {
      if (login) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [login]);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <QuickView />
		<Login login={login} setLogin={setLogin}/>
      <section className="details">
        <div className="details__head">
          <div className="details__left">
            <div className="details__title title">{product.name}</div>
            <div className="details__descriprion">{product.description}</div>
            <ul className="details__time">
              <li>
                <p>Hazırlama vaxtı</p>
                {product.prep_time} dəq
              </li>
              <li>
                <p>Bişirmə vaxtı</p>
                {product.cooking_time} dəq
              </li>
              <li>
                <p>Ümumi vaxt</p>
                {product.time} dəq
              </li>
            </ul>
            <div className="details__rating">
              {product.rating}/5
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={35}
                color2={"#ff6347"}
              />
            </div>
            <div onClick={handleClick} className="details__rating-reviews">
              Şərhləri oxu<i className="fa-solid fa-caret-down"></i>
            </div>
            {!favorite.find((t) => t.id == product.id) ? (
              <div
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_FAVORITES",
                    payload: product,
                  })
                }
                className="details__save btn-bg"
              >
                <i className="fa-solid fa-heart"></i>
                Resepti yadda saxla
              </div>
            ) : (
              <div
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVORITES",
                    payload: product.id,
                  })
                }
                className="details__save btn-bg"
              >
                <i className="fa-solid fa-heart"></i>
                Resepti sil
              </div>
            )}
          </div>
          <div className="details__img">
            <img src={product.image} alt="" />
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="energy">
        <div className="container">
          <h2 className="energy__title title">
            Bir porsion üzrə enerji dəyəri
          </h2>
          <div className="energy__row">
            <div className="energy__item">
              <h5 className="energy__label">KALORİYƏ</h5>
              <p className="energy__dig">{product.calorie}</p>
              <div className="energy__name">KKAL</div>
            </div>
            <div className="energy__item">
              <h5 className="energy__label">ZÜLALLAR</h5>
              <p className="energy__dig">{product.proteins}</p>
              <div className="energy__name">QRAMM</div>
            </div>
            <div className="energy__item">
              <h5 className="energy__label">YAĞLAR</h5>
              <p className="energy__dig">{product.fats}</p>
              <div className="energy__name">QRAMM</div>
            </div>
            <div className="energy__item">
              <h5 className="energy__label">KARBOHIDRATLAR</h5>
              <p className="energy__dig">{product.carbohydrates}</p>
              <div className="energy__name">QRAMM</div>
            </div>
          </div>
        </div>
      </section>
      <section className="what">
        <div className="container">
          <div className="what__wrapper">
            <div className="what__text">
              <h1 className="what__title title">{product.name} nədir</h1>
              <ul className="what__list">
                {product.whatis &&
                  product.whatis.map((a, b) => <li key={b}>{a}</li>)}
              </ul>
            </div>
            <div className="what__image">
              <img src={product.image_2} alt="" />
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="recipe">
        <div className="container">
          <h2 className="recipe__title title">Hazırlanma prossesi</h2>
          <ol className="recipe__list">
            {product.recipe &&
              product.recipe.map((a, b) => <li key={b}>{a}</li>)}
          </ol>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <h3 className="ingredients__title title">İngredientlər</h3>
          <div className="ingredients__count">
            <p className="ingredients__portion">Porsiya</p>
            <div className="ingredients__counter">{product.porsion}</div>
          </div>
          <ul className="ingredients__list">
            {product.ingredients &&
              product.ingredients.map((a, b) => <li key={b}>{a}</li>)}
          </ul>
        </div>
      </section>
      <section className="advice">
        <h1 className="advice__title title">Tövsiyə</h1>
        <div className="advice__wrapper">
          <p className="advice__text">{product.advice}</p>
        </div>
      </section>
      <section ref={ref} className="review">
        <div className="container">
          <h1 className="review__title title">Şərhlər</h1>
          <div className="review__wrapper">
            {reviews.map((a) => (
              <>
                <div key={a.id} className="review__item">
                  <div className="review__content">
                    <div className="review__body">
                      <div className="review__img">{a.name.slice(0, 1)}</div>
                      <div className="review__info">
                        <p className="review__name">{a.name}</p>
                        <p className="review__date">{a.date}</p>
                      </div>
                    </div>
                    <div className="review__review">{a.review}</div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="review__input">
            <textarea
              name="review"
              id=""
              placeholder="Şərh əlavə edin"
            ></textarea>
            <input
              onClick={() => setLogin(true)}
              className="review__btn btn"
              type="submit"
              value="Göndər"
            />
          </div>
        </div>
      </section>
      <section className="related">
        <div className="container">
          <h1 className="related__title title">Oxşar repetləri tap</h1>
          <div className="related__row">
            <Slider
              key={related.map((a) => a.id)}
              slides={related.filter((a) => a.category == product.category)}
            />
          </div>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(Details);
