import React from "react";

function Element({ item }) {
  return (
    <div className="ajax_block">
      <div className="product">
        <div className="container">
          <div className="product_container">
            <div className="product_slider">
              <img
                src={`https://api.nomoreparties.co${item.image.url}`}
                alt={item.nameRU}
              />
            </div>
            <div className="product_main_container">
              <div className="product_main js-variant-item">
                <div
                  className="info info_variant js-variant-info active"
                  data-variant="7"
                >
                  <h1>{item.nameRU}</h1>
                  <div className="price_block">
                    <div className="price">
                      {item.duration}
                      <span className="old_price">{item.year}</span>{" "}
                    </div>
                    <div className="label_list"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_anchors js-product-anchors">
        <div className="container">
          <a
            data-target="#product-spec"
            href="#product-spec"
            className="product_anchors_item"
          >
            Характеристики
          </a>
          <a
            data-target="#product-description"
            href="#product-description"
            className="product_anchors_item"
          >
            О товаре
          </a>

          <a
            data-target="#product-similar"
            href="#product-similar"
            className="product_anchors_item"
          >
            Сопутствующие товары
          </a>
        </div>
      </div>
      <div className="product_desc" id="product-description">
        <div className="container">
          <h3>О товаре</h3>
          <div className="text">
            <p>
              <span>{item.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Element;
