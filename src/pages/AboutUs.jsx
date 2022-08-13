import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";

function AboutUs() {
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <section className="about">
        <div className="about__body">
          <h1 className="about__title">Haqqımızda daha çox öyrən!</h1>
        </div>
      </section>
      <section className="who">
        <div className="container">
          <div className="who__wrapper">
            <div className="who__content">
              <h1 className="who__title title">Biz kimik</h1>
              <p className="who__text text">
                COMPANY sizə daha az stress və daha çox sevinclə dadlı yeməklər
                bişirməkdə kömək etmək üçün buradadır. Biz ev aşpazları üçün
                reseptlər və yemək bişirmək üçün məsləhətlər təklif edirik.
                “Mətbəx qazanır” yaratmağa kömək etmək bizim hamımız üçün
                nəzərdə tutulmuşdur. Bu gün COMPANY 3000-dən çox sınaqdan keçmiş
                reseptlər, təlimatlar və yemək planları ilə ev aşpazları üçün
                etibarlı mənbəyə çevrilib və hər ay dünyanın hər yerindən 15
                milyondan çox oxucu cəlb edir. Bizi müxtəlif resept
                tərtibatçıları, yemək müəllifləri, resept və məhsul
                sınayıcıları, fotoqraflar və digər yaradıcı peşəkarlar qrupu
                dəstəkləyir.
              </p>
              <div className="who__btns">
                {" "}
                <Link to="/market">
                  <p className="who__btn btn-arrow">Market</p>
                </Link>
                <Link to="/recipes">
                  <p className="who__btn btn-arrow">Reseptlər</p>
                </Link>
              </div>
            </div>
            <div className="who__image">
              <img
                src="https://spb.restojob.ru/media/brend/photos/1573214633.14.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="testing">
        <div className="container">
          <h1 className="testing__title title">
            Reseptin hazırlanması və sınaqdan keçirilməsi
          </h1>
          <div className="testing__wrapper">
            <div className="testing__subtitle subtitle">
              <p>
                Bizim reseptlərimiz ilk növbədə təzə, işlənməmiş
                inqrediyentlərdən istifadə edir, lakin biz inanırıq ki,
                konservləşdirilmiş, dondurulmuş və digər hazırlanmış
                inqrediyentlər üçün vaxt və yer var. Biz qidaların geniş
                çeşidini ehtiva edən pəhrizə inanırıq: əsl yağ və qaymaq, sızma
                zeytun yağı, yumurta, çoxlu meyvə və tərəvəz, ət, balıq, lobya
                və pendirdən olan protein. Üstəlik desert üçün tort.
              </p>
              <p>
                Bir reseptin Simply Recipes-ə keçmək üçün kifayət qədər yaxşı
                olub-olmadığına qərar verərkən üç şey haqqında düşünürük:
              </p>
            </div>
            <div className="testing__row">
              <div className="testing__item">
                <div className="testing__image">
                  <img src="img/about_1.jpg" alt="" />
                </div>
                <div className="testing__content">
                  <h5 className="testing__label label">
                    Birincisi, işləyirmi?
                  </h5>
                  <p className="testing__info">
                    Reseptlərə əməl etmək asan olmalı və hər dəfə etibarlı
                    nəticələr verməlidir.
                  </p>
                </div>
              </div>
              <div className="testing__item">
                <div className="testing__image">
                  <img src="img/about_2.jpg" alt="" />
                </div>
                <div className="testing__content">
                  <h5 className="testing__label label">İkincisi, dadlıdır?</h5>
                  <p className="testing__info">
                    Yemək bizi içəridən və xaricdən gülümsədirmi? Bütün
                    partiyanı özümüz yemək istəyirik?
                  </p>
                </div>
              </div>
              <div className="testing__item testing__item2">
                <div className="testing__image">
                  <img src="img/about_3.jpg" alt="" />
                </div>
                <div className="testing__content">
                  <h5 className="testing__label label">
                    Üçüncüsü, səy göstərməyə dəyərmi?
                  </h5>
                  <p className="testing__info">
                    Biz bunu təkrar etmək istəyirik (və təkrar-təkrar)?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quality">
        <div className="quality__wrapper">
          <h1 className="quality__title title">
            Biz daha yaxşı qida sistemi qururuq
          </h1>
          <div className="quality__img">
            <img
              src="https://dolgo-jv.ru/wp-content/uploads/2014/05/1-%D0%BE%D0%B2%D0%BE%D1%89%D0%B8-%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B.jpg"
              alt=""
            />
            <h3 className="quality__subtitle">
              Yüksək keyfiyyətli inqrediyentlər standartlara uyğun hazırlayırıq.
            </h3>
          </div>
          <div className="container">
            <p className="quality__text">
              Ərzaq mağazasında yeməyin yüksək keyfiyyətli və davamlı olaraq
              yetişdirildiyini söyləmək çətin ola bilər. Biz qida yetişdirilməsi
              və heyvanların yetişdirilməsi üçün daha yaxşı standartlar yaratmaq
              üçün davamlı inkişaf üzrə qabaqcıl ekspertlərlə əməkdaşlıq edirik.
              Bu, ətraf mühitimiz üçün daha yaxşı nəticələr, fermerlərimiz üçün
              zəmanətli bazarlar və ev aşpazlarımız üçün yüksək keyfiyyətli
              inqrediyentlər deməkdir.
            </p>
            <div className="quality__row">
              <div className="quality__item">
                <div className="quality__icon">
                  <i className="fa-solid fa-fish-fins"></i>
                </div>
                <p className="quality__info">
                  Tövsiyə olunan davamlı dəniz məhsulları
                </p>
              </div>
              <div className="quality__item">
                <div className="quality__icon">
                  <i className="fa-solid fa-sheep"></i>
                </div>
                <p className="quality__info">
                  Antibiotiklər və ya hormonlarla qidalanmayan
                </p>
              </div>
              <div className="quality__item">
                <div className="quality__icon">
                  <i className="fa-solid fa-sun-plant-wilt"></i>
                </div>
                <p className="quality__info">Qeyri-GMO ingredientlər</p>
              </div>
            </div>
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

export default AboutUs;
