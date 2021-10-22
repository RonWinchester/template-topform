import React from "react";
import logo from "../../img/logo_615711.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="header_top_mobile">
            <button type="button" className="burger js-open-burger"></button>
            <Link className="logo" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="geo-block js-geo">
            <div className="geo-icon js-geo-open">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.91895 4.98407C9.42449 4.98407 8.94114 5.13069 8.53002 5.4054C8.1189 5.6801 7.79847 6.07055 7.60925 6.52736C7.42003 6.98418 7.37052 7.48684 7.46698 7.9718C7.56345 8.45675 7.80155 8.9022 8.15118 9.25184C8.50081 9.60147 8.94627 9.83957 9.43122 9.93603C9.91617 10.0325 10.4188 9.98299 10.8757 9.79377C11.3325 9.60455 11.7229 9.28412 11.9976 8.873C12.2723 8.46187 12.4189 7.97852 12.4189 7.48407C12.4182 6.82126 12.1546 6.18581 11.6859 5.71714C11.2172 5.24846 10.5818 4.98482 9.91895 4.98407ZM9.91895 8.73407C9.67172 8.73407 9.43005 8.66076 9.22448 8.52341C9.01892 8.38605 8.85871 8.19083 8.7641 7.96242C8.66949 7.73402 8.64473 7.48268 8.69297 7.24021C8.7412 6.99773 8.86025 6.775 9.03506 6.60019C9.20988 6.42537 9.43261 6.30632 9.67508 6.25809C9.91756 6.20986 10.1689 6.23461 10.3973 6.32922C10.6257 6.42383 10.8209 6.58405 10.9583 6.78961C11.0956 6.99517 11.1689 7.23684 11.1689 7.48407C11.1686 7.81547 11.0367 8.13319 10.8024 8.36753C10.5681 8.60187 10.2504 8.73369 9.91895 8.73407Z"
                  fill="#003488"
                ></path>
                <path
                  d="M14.7232 2.67634C13.5354 1.48885 11.9498 0.783439 10.2725 0.696241C8.59523 0.609043 6.94508 1.14624 5.64057 2.20416C4.33605 3.26208 3.46965 4.76571 3.20857 6.42487C2.9475 8.08402 3.31026 9.78107 4.22685 11.1885L8.94978 18.439C9.05488 18.6003 9.19859 18.7329 9.36787 18.8246C9.53715 18.9164 9.72666 18.9645 9.91921 18.9645C10.1118 18.9645 10.3013 18.9164 10.4706 18.8246C10.6398 18.7329 10.7835 18.6003 10.8886 18.439L15.6117 11.1885C16.4622 9.8829 16.8381 8.32465 16.6763 6.77491C16.5145 5.22517 15.825 3.77813 14.7232 2.67634ZM14.5644 10.5062L9.91923 17.637L5.27403 10.5062C3.85216 8.32341 4.15712 5.40231 5.99915 3.5602C6.51394 3.0454 7.12508 2.63704 7.79769 2.35843C8.4703 2.07982 9.1912 1.93642 9.91923 1.93642C10.6473 1.93642 11.3682 2.07982 12.0408 2.35843C12.7134 2.63704 13.3245 3.0454 13.8393 3.5602C15.6813 5.40231 15.9863 8.32341 14.5644 10.5062Z"
                  fill="#003488"
                ></path>
              </svg>
            </div>
            <span className="js-geo-open js-geo-desktop geo-block__text">
              Санкт-Петербург
            </span>
          </div>

          {/* 
<div className="geo-popup js-geo-popup">
    <div className="geo-popup__block">
        <svg className="geo-popup__close js-geo-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2197 0.719666L15.2804 1.78033L9.06048 7.99991L15.2804 14.2197L14.2197 15.2803L7.99998 9.06041L1.78039 15.2803L0.719727 14.2197L6.93948 7.99991L0.719727 1.78033L1.78039 0.719666L7.99998 6.93941L14.2197 0.719666Z" fill="#707277"></path>
        </svg>
        <div className="geo-popup__title">Выбор города</div>
        <form action="" method="post" className="geo-popup__form">
            <input type="hidden" name="search_city" value="1"/>
            <input className="js-geo-input geo-popup__input" 
            placeholder="Введите название города" type="text" name="city_name"/>
            <div className="geo-popup__clr">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2197 0.719666L15.2804 1.78033L9.06048 7.99991L15.2804 14.2197L14.2197 15.2803L7.99998 9.06041L1.78039 15.2803L0.719727 14.2197L6.93948 7.99991L0.719727 1.78033L1.78039 0.719666L7.99998 6.93941L14.2197 0.719666Z" fill="#707277"></path>
                </svg>
            </div>
        </form>

        <div className="geo-popup__list js-geo-list">
                                                <div data-href="?change_region=44" className="geo-popup__item js-geo-item">Москва(Москва)</div>
                                    <div data-href="?change_region=137" className="geo-popup__item js-geo-item">Санкт-Петербург(Санкт-Петербург)</div>
                                    <div data-href="?change_region=250" className="geo-popup__item js-geo-item">Екатеринбург(Свердловская)</div>
                                    <div data-href="?change_region=252" className="geo-popup__item js-geo-item">Тюмень(Тюменская)</div>
                                    <div data-href="?change_region=270" className="geo-popup__item js-geo-item">Новосибирск(Новосибирская)</div>
                                    <div data-href="?change_region=424" className="geo-popup__item js-geo-item">Казань(Татарстан)</div>
                                    <div data-href="?change_region=437" className="geo-popup__item js-geo-item">Сочи(Краснодарский)</div>
                                    </div>

    </div>
</div> */}

          <div className="top_menu js-info-menu">
            <ul>
              <li>
                <a href="/o-kompanii">О нас </a>
              </li>
              <li>
                <a href="/dostavka-i-oplata">Доставка </a>
              </li>
              <li>
                <a href="/news">Новости </a>
              </li>
              <li>
                <a href="/kontakty">Контакты </a>
              </li>
            </ul>
          </div>
          <div className="phone_numbers">
            <a href="tel:+78127777777">
              <svg
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6328 20.9494L14.5511 21.0107C12.9396 22.6223 8.59301 21.2956 5.59352 18.2972C2.61446 15.3181 1.30926 10.9726 2.92084 9.361C3.61531 8.66654 4.20663 8.3193 4.69582 8.36117C5.02263 8.3816 5.32799 8.60628 5.63437 9.01377L6.59335 10.5447L6.61378 10.5651C6.81803 10.8296 6.87829 11.137 6.79761 11.4015C6.7159 11.667 6.49122 11.8907 6.14399 12.0143C5.40969 12.2594 5.02263 12.8711 5.10331 13.6871C5.30756 15.6868 8.2662 18.7874 10.225 19.0529L10.4895 19.0733C11.1636 19.0733 11.6732 18.7057 11.9173 18.0531C12.0807 17.6456 12.3656 17.3188 12.6934 17.2167C12.9181 17.1554 13.1418 17.1962 13.3665 17.3596L13.3879 17.3801L14.9178 18.339C15.3467 18.6444 15.5499 18.9508 15.5704 19.2776C15.6122 19.7045 15.2854 20.2764 14.6328 20.9494Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M9.44678 8.42549C11.424 8.42549 13.2051 9.22413 14.5011 10.5191C15.7971 11.8161 16.5947 13.5972 16.5957 15.5744C16.5957 16.1382 17.0522 16.5957 17.617 16.5957C18.1818 16.5957 18.6383 16.1382 18.6383 15.5744C18.6373 10.4977 14.5235 6.38293 9.44678 6.38293C8.88304 6.38293 8.42551 6.84047 8.42551 7.40421C8.42551 7.96796 8.88304 8.42549 9.44678 8.42549Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M9.44678 4.3404C12.5525 4.3404 15.3549 5.59555 17.3903 7.63096C19.4247 9.66738 20.6798 12.4687 20.6808 15.5744C20.6808 16.1382 21.1373 16.5957 21.7021 16.5957C22.2669 16.5957 22.7234 16.1382 22.7234 15.5744C22.7224 8.24066 16.7806 2.29785 9.44678 2.29785C8.88304 2.29785 8.42551 2.75538 8.42551 3.31913C8.42551 3.88287 8.88304 4.3404 9.44678 4.3404Z"
                  fill="#0044A4"
                ></path>
              </svg>
              <span>+7 (812) 777-77-77</span>
            </a>
          </div>
          <button type="button" className="h_call js-open-callback">
            Заказать звонок
          </button>
          <div className="header_basket">
            <a href="/service/basket" className="basket_icon">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7273 15.0546H10.4291C9.94737 15.0537 9.55726 14.6636 9.55639 14.1818C9.55726 13.7001 9.94737 13.31 10.4291 13.3091C10.4335 13.3091 12.5847 13.3091 14.8277 13.3091C17.0706 13.3091 19.4007 13.3091 19.7507 13.3091C20.5021 13.3143 21.2501 13.0805 21.8435 12.5917C22.4413 12.1056 22.8742 11.4144 23.1945 10.5609C23.4144 9.97092 23.8691 8.56496 24.2819 7.27507C24.6921 5.99042 25.0508 4.84365 25.0508 4.84278C25.1337 4.57834 25.0857 4.2886 24.9216 4.06518C24.7575 3.84176 24.4949 3.70911 24.2182 3.70911H12.8727C12.3901 3.70911 12 4.10009 12 4.58183C12 5.06358 12.3901 5.45456 12.8727 5.45456H24.2182V4.58183L23.3856 4.32089C23.3847 4.32351 23.0278 5.46503 22.6194 6.74358C22.2127 8.01776 21.7475 9.44816 21.5599 9.94911C21.3129 10.6106 21.0231 11.0112 20.743 11.2373C20.4611 11.4598 20.1792 11.5593 19.7498 11.5645C19.4007 11.5645 17.0706 11.5645 14.8268 11.5645C12.583 11.5645 10.4326 11.5645 10.4282 11.5645C8.98213 11.5645 7.81093 12.7366 7.81006 14.1827C7.81093 15.6288 8.98213 16.8009 10.4282 16.8009H20.7264C21.209 16.8009 21.5991 16.4099 21.5991 15.9282C21.5991 15.4464 21.2099 15.0546 20.7273 15.0546Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M2.40001 2.8364H4.14546C4.31128 2.8364 4.41863 2.85822 4.48496 2.88265C4.58183 2.92367 4.62634 2.94811 4.72845 3.09385C4.82532 3.23785 4.94314 3.51451 5.04263 3.93254L5.04525 3.94476L7.83885 14.7491C7.95928 15.216 8.43579 15.4962 8.90183 15.3757C9.36874 15.2553 9.64888 14.7788 9.52845 14.3119L6.73572 3.50752L5.89092 3.72658L6.73921 3.51974C6.56554 2.82156 6.34037 2.2316 5.8883 1.7612C5.66314 1.5308 5.38037 1.34927 5.07841 1.24105C4.77557 1.13196 4.46139 1.09094 4.14546 1.09094H2.40001C1.91826 1.09094 1.52728 1.48192 1.52728 1.96367C1.52728 2.44542 1.91826 2.8364 2.40001 2.8364Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M11.1273 21.1636C12.0913 21.1636 12.8727 20.3822 12.8727 19.4182C12.8727 18.4542 12.0913 17.6727 11.1273 17.6727C10.1633 17.6727 9.38184 18.4542 9.38184 19.4182C9.38184 20.3822 10.1633 21.1636 11.1273 21.1636Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M18.1091 21.1636C19.0731 21.1636 19.8546 20.3822 19.8546 19.4182C19.8546 18.4542 19.0731 17.6727 18.1091 17.6727C17.1451 17.6727 16.3636 18.4542 16.3636 19.4182C16.3636 20.3822 17.1451 21.1636 18.1091 21.1636Z"
                  fill="#0044A4"
                ></path>
              </svg>
              <div className="nav__badge basket_count">0</div>
            </a>
            <div className="basket_announce">
              <div className="basket_announce_container">
                <div className="basket_announce_list">
                  <div className="basket_announce_item">
                    <div className="image">
                      <img src="../img/content/product.webp" alt="" />
                    </div>
                  </div>
                </div>
                <a
                  href="/html/basket.php"
                  className="btn btn_default btn_basket"
                >
                  Перейти в корзину
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom js-header-bottom">
        <div className="container">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="bottom_menu">
            <ul className="catalog-menu">
              <li className="catalog-menu__item active_menu">
                <Link className="js-menu-open" to="/katalog/tech">
                  Техника
                </Link>
              </li>
              <li className="catalog-menu__item ">
                <Link className="js-menu-open" to="/katalog/clothes">
                  Одежда
                </Link>
              </li>
              <li className="catalog-menu__item ">
                <Link className="js-menu-open" to="/katalog/forkids">
                  Для детей
                </Link>
              </li>
              <li className="catalog-menu__item ">
                <Link className="js-menu-open" to="/katalog/cosmo">
                  Косметика
                </Link>
              </li>
              <li className="catalog-menu__item ">
                <Link className="js-menu-open" to="/katalog/forpets">
                  Для животных
                </Link>
              </li>
              <li className="catalog-menu__item ">
                <a className="js-menu-open" href="/katalog/goods">
                  Мебель
                </a>
              </li>
              <li className="catalog-menu__item ">
                <a className="js-menu-open" href="/katalog/velosipedy">
                  Велосипеды
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="js-header-menu mobile_info_menu">
          <button
            type="button"
            className="mobile_h_call h_call js-open-callback"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
