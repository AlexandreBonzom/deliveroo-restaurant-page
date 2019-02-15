import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";

class DishArticle extends React.Component {
  renderPicture = picture => {
    if (picture) {
      return <img className="dish-picture" src={picture} alt="dish-picture" />;
    } else {
      return null;
    }
  };

  renderPricePopular = (price, popular) => {
    if (popular) {
      return (
        <div className="dish-price">
          {price + "€"}
          <span className="popular">
            <i className="fas fa-star" /> Populaire
          </span>
        </div>
      );
    } else {
      return <div className="dish-price">{price + "€"}</div>;
    }
  };
  render() {
    return (
      <div
        className="dish-article-element"
        onClick={() => this.props.handleclickdish(this.props.dish)}
      >
        <div className="dish-text">
          <div className="dish-name">{this.props.dish.title}</div>
          <div className="dish-description">
            <LinesEllipsis
              text={this.props.dish.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />{" "}
          </div>
          {this.renderPricePopular(
            this.props.dish.price,
            this.props.dish.popular
          )}
        </div>
        {this.renderPicture(this.props.dish.picture)}
      </div>
    );
  }
}

export default DishArticle;
