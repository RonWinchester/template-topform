/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card({ item }) {
  const [numGoods, setNumGoods] = React.useState(1);
  const location = useLocation();
  console.log(location)

  function handleNumPlus() {
    setNumGoods(numGoods + 1);
  }

  function handleNumMinus() {
    setNumGoods(numGoods - 1);
  }

  return (
    <div className="catalog_item js-variant-item swiper-slide">
      <div className="catalog_item_container">
        <Link
          to={`${location.pathname}/${item.id}`}
          className="image"
        >
          <img
            src={`https://api.nomoreparties.co${item.image.url}`}
            alt={item.nameRU}
          />
          <div className="label_list">
            <div className="label sale_label">-8%</div>
          </div>
        </Link>
        <div className="info js-variant-info" data-variant="5">
          <div className="stars"></div>
          <Link to={`${location.pathname}/${item.id}`} className="title">
            {item.nameRU}
          </Link>
          <div className="price">
            {item.duration}
            <span className="old_price">{item.year}</span>
          </div>
          <div className="buy_block">
            <div className="quant">
              <div className="quant_switcher">
                <div
                  className="js-catalog-count minus disabled"
                  onClick={handleNumMinus}
                >
                  -
                </div>
                <input
                  type="number"
                  min="1"
                  max=""
                  className="js-catalog-number number"
                  value={numGoods}
                  readOnly
                />
                <div className="js-catalog-count plus" onClick={handleNumPlus}>
                  +
                </div>
              </div>
            </div>
            <a
              href="#"
              data-count="1"
              data-id="2"
              className="btn_default buy_btn js-catalog-product"
            >
              В корзину
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
