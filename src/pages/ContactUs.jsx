import React from "react";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";

function ContactUs() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [login, setLogin] = useState(false);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <Login login={login} setLogin={setLogin} />
      <section className="contact">
        <div className="contact__wrapper">
          <h1 className="contact__title">Bizimlə əlaqə</h1>
          <div className="contact__btns">
            <p
              onClick={() => {
                ref1.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="contact__btn btn-arrow"
            >
              Azadlıq p-ti
            </p>
            <p
              onClick={() => {
                ref2.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="contact__btn btn-arrow"
            >
              Neftçilər p-ti
            </p>
          </div>
        </div>
      </section>
      <section className="form">
        <div className="container">
          <h2 className="form__title title">Bizimlə əlaqə saxlayın</h2>
          <div className="form__wrapper">
            <div className="form__info">
              Suallarınız varsa və ya köməyə ehtiyacınız varsa, lütfən,
              aşağıdakı formanı doldurun. 1 iş günü ərzində cavab vermək üçün
              əlimizdən gələni edirik.
            </div>
            <form className="form__form" action="">
              <div className="form__name">
                <label htmlFor="name">Sizin adınız</label>
                <input type="text" id="name" />
              </div>
              <div className="form__email">
                <label htmlFor="email">Sizin elektron ünvanınız</label>
                <input type="text" id="email" />
              </div>
              <div className="form__message">
                <label htmlFor="message">
                  Biz sizə nə ilə kömək edə bilərik?
                </label>
                <textarea name="message" id="message"></textarea>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setLogin(true);
                }}
                className="form__btn"
              >
                Göndər
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
          <div className="map__wrapper">
            <div className="map__item">
              {" "}
              <div ref={ref1} className="map__content">
                <h1 className="map__title title">Azadlıq prospekti</h1>
                <div className="map__info">
                  <p>
                    <b>Ünvan:</b> Azadlıq prospekti
                  </p>
                  <p>
                    <b>Telefon:</b> (718) 484-1507
                  </p>
                  <p>
                    <b>İş saatları:</b> <br />
                    Sun: 12:00 PM – 8:30 <br />
                    PM Mon, Wed Thu: 12:00 PM – 9:00 PM <br />
                    Fri Sat : 12:00 PM – 10:00 PM <br /> Tue: Closed
                  </p>
                </div>
              </div>
              <div className="map__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5845981493494!2d49.86562641523109!3d40.39589837936758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2z0KbQtdC90YLRgCDQk9C10LnQtNCw0YDQsCDQkNC70LjQtdCy0LA!5e0!3m2!1sru!2s!4v1658315055246!5m2!1sru!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="map__item">
              <div ref={ref2} className="map__content">
                <h1 className="map__title title">Neftçilər prospekti</h1>
                <div className="map__info">
                  <p>
                    <b>Ünvan:</b> Neftçilər prospekti
                  </p>
                  <p>
                    <b>Telefon:</b> (718) 484-1507
                  </p>
                  <p>
                    <b>İş saatları:</b> <br />
                    Sun: 12:00 PM – 8:30 <br />
                    PM Mon, Wed Thu: 12:00 PM – 9:00 PM <br />
                    Fri Sat : 12:00 PM – 10:00 PM <br /> Tue: Closed
                  </p>
                </div>
              </div>
              <div className="map__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.715931700049!2d49.845388615230355!3d40.37082267937045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dad3cf343e1%3A0xd23097c25c1e06d!2zTmVmdMOnaWzJmXIgUHJvc3Bla3RpLCBCYWvEsSwg0JDQt9C10YDQsdCw0LnQtNC20LDQvQ!5e0!3m2!1sru!2s!4v1658315475967!5m2!1sru!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(ContactUs);
