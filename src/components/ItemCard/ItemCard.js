import React from "react";

import "./ItemCard.scss";

const ItemCard = ({ title, rightCategory, onClick }) => (
  <article className="item-card" onClick={onClick}>
    <h3 className="item-card__title">{title}</h3>
    <div className="item-card__category">{rightCategory}</div>
  </article>
);

export default ItemCard;
