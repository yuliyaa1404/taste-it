import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import Faq from "react-faq-component";

function AboutMarket() {
  const data = {
    rows: [
      {
        title: "Alarkən 20%-ə qədər qənaət edin",
        content: `Statistikaya görə, biz supermarketdə nəzərdə tutduğumuzdan 30%
                  çox xərcləyirik və bütün alınan məhsulların təxminən 20%-i
                  xarab olur və tullanır.
                  Artıq soyuducuda olan hər şeyi səbətdən çıxarın və yalnız sizə
                  lazım olanı sifariş edin. Supermarketlərdən daha rahatdır və
                  digər dizaynerlərdən xeyli ucuzdur.`,
      },
      {
        title: "Səbəti lazımsız məhsullarla doldurmaq lazım deyil",
        content:
          "Hazır menyularda tez-tez rast gəlinən problem zövqümüzə, həkimin tövsiyələrinə uyğun gəlməyən və ya uşaqların üstünlüklərini nəzərə almayan yeməklərdir. Beləliklə, siz dadlı və sağlam yeməklərlə ailənizi əzizləmək istəyirsiniz. Menyunu zövqünüzə görə dəyişdirin. Sadəcə bəyənmədiyiniz yeməkləri aradan qaldırın və ya başqaları ilə əvəz edin. Bu yanaşma nə böyükləri, nə də uşaqları ac ​​qoymayacaq, həm də sifarişin qiymətini azaldacaq.",
      },
      {
        title: "Reseptlər axtarmağa özünüzü yormağa ehtiyac yoxdur",
        content: ` Bütün ailə üçün hər gün ləzzətli və sağlam yeməkləri
                  dəyişdirmək üçün super qəhrəman bacarıqları lazımdır. Əslində,
                  fantaziya üçün çox vaxt vaxt yoxdur, buna görə də eyni şeyi
                  yeməlisiniz. Sadə gündəlik reseptlərlə hazır yeməklər dəstini seçin və
                  sistem məhsulların siyahısını yaradacaq və səbətin dəyərini
                  hesablayacaq.`,
      },
      {
        title: "Artıq alış-verişə getməyə ehtiyac yoxdur",
        content:
          "Alış-verişinə nə qədər vaxt sərf etdiyinizi düşünmüsünüzmü? Biz həftədə ən azı 7 saat hesabladıq. Ağır paketləri bizə həvalə edərək vaxtınıza və səyinizə qənaət edin. Yalnız reseptləri olan hazır məhsullar dəstini seçin, qalanını biz həll edəcəyik. Ailənizə vaxt ayırın, biz sizin üçün ən təzəsini yığıb pulsuz çatdıraq.",
      },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "#222222",
    rowTitleColor: "#222222",
    rowContentColor: "#005955",
    arrowColor: "#005955",
    rowTitleTextSize: "22px",
    rowTitleMarginBottom: "20px",
    rowContentTextSize: "18px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    transitionDuration: "1s",
    timingFunc: "ease",
  };

  const config = {
    animate: true,
    openOnload: 0,
  };
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <section className="welcome">
        <div className="welcome__content">
          <h1 className="welcome__title title">
            20% vəsaitə və həftədə 5-7 saat qənaət edin
          </h1>
          <h3 className="welcome__subtitle subtitle">
            Biz yaxşı düşünülmüş reseptlərlə məhsulları çatdırırıq
          </h3>
          <ul className="welcome__text text">
            <li>Özünüz almaqdan 20% ucuz</li>
            <li>Seçmək üçün 500-dən çox resept</li>
            <li>Vaxtınıza qənaət</li>
          </ul>
          <Link to="/market">
            <p className="welcome__btn wave-btn ">
              <span className="wave-btn__text">Market</span>
              <span className="wave-btn__waves"></span>
            </p>
          </Link>
        </div>
        <div className="welcome__image">
          <img src="https://korzinanadom.ru/img/dog.030ef264.png" alt="" />
        </div>
      </section>
      <section className="how">
        <div className="container">
          <h1 className="how__title title">Bu necə işləyir?</h1>
          <div className="how__row">
            <div className="how__item">
              <div className="how__num">1</div>
              <div className="how__info">
                <h5 className="how__text">
                  Sevdiyiniz yeməkləri <br /> <span> tapın və seçin</span>
                </h5>
              </div>
            </div>
            <div className="how__item">
              <div className="how__num">2</div>
              <div className="how__info">
                <h5 className="how__text">
                  Servis istediyiniz məhsulları <br />
                  <span> tapacaq və qiymətini hesablayacaq</span>
                </h5>
              </div>
            </div>
            <div className="how__item">
              <div className="how__num">3</div>
              <div className="how__info">
                <h5 className="how__text">
                  Sifariş edin və <br />
                  <span>resept ilə məhsulları alın</span>
                </h5>
              </div>
            </div>
            <div className="how__item">
              <div className="how__num-last">4</div>
              <div className="how__info">
                <h5 className="how__text">
                  Vaxtınıza və pulunuza <br /> <span>qənaət edin</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="container">
          <div className="steps__wrapper">
            <h1 className="steps__title title">Steps</h1>
            <div className="steps__row">
              <div className="steps__item">
                <div className="steps__image">
                  <img
                    src="https://takprosto.cc/wp-content/uploads/k/kak-gotovit-pechenye/3.jpg"
                    alt=""
                  />
                </div>
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Sevdiyiniz yeməkləri seçin
                  </h3>
                  <p className="steps__text text">
                    Səhər yeməyindən şam yeməyinə, uşaqlardan tutmuş restoran
                    reseptlərinə qədər bütün seçimlərimiz var. Hər zövqə görə:
                    "vegan", "yüngül", "ədviyyatlı yeməyin", "soğan sevmirəm" və
                    zövqünüzə uyğun hər hansı şəxsi üstünlüklər.
                  </p>
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__body2">
                  <h3 className="steps__subtitle subtitle">
                    Sizin üçün ingredientləri hazırlayırıq və doğrayırıq
                  </h3>
                  <p className="steps__text text">
                    Artıq soğan doğramaq, kartof soymaq və mətbəxi təmizləmək
                    yoxdur - biz bu işdə kömək edirik. Biz həmçinin ət üçün
                    marinadlar və öz təbii souslarımızı hazırlayırıq - onlarla
                    hər şey daha dadlıdır.
                  </p>
                </div>
                <div className="steps__image2">
                  <img
                    src="https://takprosto.cc/wp-content/uploads/u/urozhay-kabachkov/4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__image">
                  <img
                    src="https://img.foodpg.com/img/news/237/blue-apron-popular-meal-kit-delivery-service.jpg"
                    alt=""
                  />
                </div>
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Biz təhlükəsizik ilə dəsti çatdırırıq
                  </h3>
                  <p className="steps__text text">
                    İstənilən gündə, əlverişli vaxtda - quraşdırmaq asandır,
                    köçürmək asandır. Soyuducuda daşıyırıq, birbaşa soyuducuya
                    gətiririk. Kraft torbalarda çatdırırıq, lazımsız plastikdən
                    qaçmağa çalışırıq.
                  </p>
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__body2">
                  <h3 className="steps__subtitle subtitle">
                    Bişirməyı cəmi 15 dəqiqə alırsız!
                  </h3>
                  <p className="steps__text text">
                    İstənilən mürəkkəblikdə olan yeməklər - 15 dəqiqə ərzində:
                    mətbəxdə özünü aşpaz kimi hiss etməyə vaxt tapmaq, lakin çox
                    yorulmamaq. Hər şey restorandakı kimidir: biz blanklar
                    düzəldirik, sən şah əsər yığırsan.
                  </p>
                </div>
                <div className="steps__image2">
                  <img
                    src="https://alltimelists.com/wp-content/uploads/2020/07/boil-vegetables.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="steps__row2">
              <div className="steps__item">
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Sevdiyiniz yeməkləri seçin
                  </h3>
                  <p className="steps__text text">
                    Səhər yeməyindən şam yeməyinə, uşaqlardan tutmuş restoran
                    reseptlərinə qədər bütün seçimlərimiz var. Hər zövqə görə:
                    "vegan", "yüngül", "ədviyyatlı yeməyin", "soğan sevmirəm" və
                    zövqünüzə uyğun hər hansı şəxsi üstünlüklər.
                  </p>
                </div>
                <div className="steps__image">
                  <img
                    src="https://takprosto.cc/wp-content/uploads/k/kak-gotovit-pechenye/3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Sizin üçün ingredientləri hazırlayırıq və doğrayırıq
                  </h3>
                  <p className="steps__text text">
                    Artıq soğan doğramaq, kartof soymaq və mətbəxi təmizləmək
                    yoxdur - biz bu işdə kömək edirik. Biz həmçinin ət üçün
                    marinadlar və öz təbii souslarımızı hazırlayırıq - onlarla
                    hər şey daha dadlıdır.
                  </p>
                </div>
                <div className="steps__image">
                  <img
                    src="https://takprosto.cc/wp-content/uploads/u/urozhay-kabachkov/4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Biz təhlükəsizik ilə dəsti çatdırırıq
                  </h3>
                  <p className="steps__text text">
                    İstənilən gündə, əlverişli vaxtda - quraşdırmaq asandır,
                    köçürmək asandır. Soyuducuda daşıyırıq, birbaşa soyuducuya
                    gətiririk. Kraft torbalarda çatdırırıq, lazımsız plastikdən
                    qaçmağa çalışırıq.
                  </p>
                </div>
                <div className="steps__image">
                  <img
                    src="https://img.foodpg.com/img/news/237/blue-apron-popular-meal-kit-delivery-service.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="steps__item">
                <div className="steps__body">
                  <h3 className="steps__subtitle subtitle">
                    Bişirməyı cəmi 15 dəqiqə alırsız!
                  </h3>
                  <p className="steps__text text">
                    İstənilən mürəkkəblikdə olan yeməklər - 15 dəqiqə ərzində:
                    mətbəxdə özünü aşpaz kimi hiss etməyə vaxt tapmaq, lakin çox
                    yorulmamaq. Hər şey restorandakı kimidir: biz blanklar
                    düzəldirik, sən şah əsər yığırsan.
                  </p>
                </div>
                <div className="steps__image">
                  <img
                    src="https://alltimelists.com/wp-content/uploads/2020/07/boil-vegetables.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <h2 className="faq__title title">Niyə cəhd etməyə dəyər?</h2>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </section>
    </>
  );
}

export default AboutMarket;
