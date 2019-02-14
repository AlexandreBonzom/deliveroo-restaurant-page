import React, { Component } from "react";
import Category from "./Category";

class Menu extends React.Component {
  renderMenu = menu => {
    const categoryList = Object.keys(menu);

    return (
      <ul className="categories-list">
        {categoryList.map((category, index) => {
          return (
            <li key={index}>
              <Category title={category} dishes={menu[category]} />
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div className="menu">{this.renderMenu(this.props.menu)}</div>;
  }
}

export default Menu;
