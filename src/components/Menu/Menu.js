import React from "react";
import Category from "../Category/Category";

import MenuNav from "../MenuNav/MenuNav";
const Menu = ({
  menu,
  basket,
  subtotal,
  paymentOptions,
  handleclickdish,
  handleAddAndRemoveClick,
  handleTipsClick
}) => {
  const renderMenu = () => {
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
                  basket={basket}
                />
              </li>
            );
          })}
        </ul>
        <div className="basket-container" />
      </div>
    );
  };

  return (
    <div className="menu">
      <MenuNav
        menu={menu}
        basket={basket}
        handleAddAndRemoveClick={handleAddAndRemoveClick}
        subtotal={subtotal}
        paymentOptions={paymentOptions}
        handleTipsClick={handleTipsClick}
      />
      {renderMenu()}
    </div>
  );
};

export default Menu;
