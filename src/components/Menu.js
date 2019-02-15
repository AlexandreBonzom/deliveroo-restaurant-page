import React, { Component } from "react";
import Category from "./Category";
import Basket from "./Basket";
import MenuNav from "./MenuNav";
class Menu extends React.Component {
  renderMenu = (menu, handleclickdish) => {
    const categoryList = Object.keys(menu);

    return (
      <div className="categories-container">
        <ul className="categories-list">
          {categoryList.map((category, index) => {
            return (
              <li key={index} id={category}>
                <Category
                  title={category}
                  dishes={menu[category]}
                  handleclickdish={handleclickdish}
                />
              </li>
            );
          })}
        </ul>
        <div className="basket-container" />
      </div>
    );
  };

  render() {
    return (
      <div className="menu">
        <MenuNav
          menu={this.props.menu}
          basket={this.props.basket}
          handleAddAndRemoveClick={this.props.handleAddAndRemoveClick}
          subtotal={this.props.subtotal}
          deliveryFee={this.props.deliveryFee}
          serviceFee={this.props.serviceFee}
          handleTipsClick={this.props.handleTipsClick}
          tips={this.props.tips}
        />
        {this.renderMenu(this.props.menu, this.props.handleclickdish)}
      </div>
    );
  }
}

export default Menu;
