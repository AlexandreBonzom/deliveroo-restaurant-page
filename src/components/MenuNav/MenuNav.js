import React from "react";
import Basket from "../Basket/Basket";

import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuNav = ({
  basket,
  handleAddAndRemoveClick,
  subtotal,
  paymentOptions,
  menu,
  handleTipsClick
}) => {
  return (
    <div className="menu-nav-container">
      {" "}
      <div className="menu-nav">
        <ul className="menu-nav-categories">
          {Object.keys(menu).map((category, index) => {
            if (menu[category].length) {
              return (
                <li key={index}>
                  <AnchorLink offset="70" href={"#" + category}>
                    {category}
                  </AnchorLink>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className="basket-container">
          <Basket
            basket={basket}
            handleAddAndRemoveClick={handleAddAndRemoveClick}
            subtotal={subtotal}
            paymentOptions={paymentOptions}
            handleTipsClick={handleTipsClick}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
