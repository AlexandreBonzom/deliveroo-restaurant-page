import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const DishArticle = props => {
  const dishInBasket = (dish, basket) => {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === dish.id) {
        return { isPresent: true, dishQuantity: basket[i].quantity };
      }
    }
    return { isPresent: false };
  };
  const renderTitle = () => {
    return (
      <div className="dish-name">
        {dishInBasket(props.dish, props.basket).isPresent && (
          <span className="quantity-menu-dish-article">
            {dishInBasket(props.dish, props.basket).dishQuantity + "·"}
          </span>
        )}
        {props.dish.title}
      </div>
    );
  };

  const renderPicture = () => {
    if (props.dish.picture) {
      return (
        <img
          className="dish-picture"
          src={props.dish.picture}
          alt={props.dish.title}
        />
      );
    }
  };

  const renderPricePopular = () => {
    return props.dish.popular ? (
      <div className="dish-price">
        {props.dish.price + "€"}
        <span className="popular">
          <i className="fas fa-star" /> Populaire
        </span>
      </div>
    ) : (
      <div className="dish-price">{props.dish.price + "€"}</div>
    );
  };

  return (
    <div
      className={
        dishInBasket(props.dish, props.basket).isPresent
          ? "dish-article-element selected-dish"
          : "dish-article-element"
      }
      onClick={() => props.handleclickdish(props.dish)}
    >
      <div className="dish-text">
        <div className="dish-name">{renderTitle()}</div>
        <div className="dish-description">
          <LinesEllipsis
            text={props.dish.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />{" "}
        </div>
        {renderPricePopular()}
      </div>
      {renderPicture()}
    </div>
  );
};

export default DishArticle;
