import React, { Component } from "react";
import Basket from "./Basket";
import DropdownButton from "react-bootstrap/DropdownButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

class MenuNav extends React.Component {
  renderMenuNav = menu => {
    return (
      <div className="menu-nav">
        <ul>
          {Object.keys(menu).map((category, index) => {
            if (menu[category].length > 0) {
              console.log(category);
              return (
                <li key={index}>
                  <AnchorLink offset="70" href={"#" + category}>
                    {category}
                  </AnchorLink>
                </li>
              );
            }
          })}
        </ul>
        <div className="basket-container">
          <Basket
            basket={this.props.basket}
            handleAddAndRemoveClick={this.props.handleAddAndRemoveClick}
            subtotal={this.props.subtotal}
            deliveryFee={this.props.deliveryFee}
            serviceFee={this.props.serviceFee}
            handleTipsClick={this.props.handleTipsClick}
            tips={this.props.tips}
          />{" "}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="menu-nav-container">
        {this.renderMenuNav(this.props.menu)}
      </div>
    );
  }
}

export default MenuNav;
