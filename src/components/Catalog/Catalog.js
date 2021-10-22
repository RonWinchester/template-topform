/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "../Cards/Cards";

function Catalog({ items, goodsPage }) {

  return (
    <div className="catalog_main">
      <div className="catalog_list">
        {items.map((item, index) => (
          <Card key={index} item={item} goodsPage={goodsPage}></Card>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
