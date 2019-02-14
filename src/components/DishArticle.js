import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";

class DishArticle extends React.Component {
  render() {
    if (this.props.dish.picture) {
      return (
        <div className="dish-article-element">
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
            <div className="dish-price">{this.props.dish.price + "€"}</div>
          </div>
          <img
            className="dish-picture"
            src={this.props.dish.picture}
            alt="dish-picture"
          />
        </div>
      );
    } else {
      return (
        <div className="dish-article-element">
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
            <div className="dish-price">{this.props.dish.price + "€"}</div>
          </div>
        </div>
      );
    }
  }
}

export default DishArticle;
