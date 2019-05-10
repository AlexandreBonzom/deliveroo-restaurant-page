import React from "react";
import DishArticle from "../DishArticle/DishArticle";

class Category extends React.Component {
  render() {
    if (this.props.dishes.length) {
      return (
        <div className="category">
          {" "}
          <div>
            <h2>{this.props.title}</h2>
            <ul className="dishes">
              {this.props.dishes.map(dish => {
                return (
                  <li key={dish.id} className="dish-article-list">
                    <DishArticle
                      dish={dish}
                      handleclickdish={this.props.handleclickdish}
                      basket={this.props.basket}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Category;
