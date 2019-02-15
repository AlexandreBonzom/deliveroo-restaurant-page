import React, { Component } from "react";

class Basket extends React.Component {
  renderBasket = (
    basket,
    handleAddAndRemoveClick,
    subtotal,
    serviceFee,
    deliveryFee,
    handleTipsClick,
    tips
  ) => {
    if (basket.length === 0) {
      return (
        <div className="basket">
          <div className="basket-empty-validate-button">Valider mon panier</div>
          <div className="basket-empty">Votre Panier est vide</div>
        </div>
      );
    } else {
      return (
        <div className="basket">
          <div className="button-validate">Valider mon panier</div>
          <ul>
            {basket.map((dish, index) => {
              return (
                <li key={index}>
                  <i
                    className="fas fa-minus-circle"
                    onClick={() => handleAddAndRemoveClick(-1, index)}
                  />
                  <span className="quantity">{dish.quantity}</span>
                  <i
                    className="fas fa-plus-circle"
                    onClick={() => handleAddAndRemoveClick(+1, index)}
                  />
                  <span className="dish-name">{dish.name}</span>
                  {(dish.price * dish.quantity).toFixed(2) + "€"}
                </li>
              );
            })}
          </ul>

          <div className="basket-total">
            <span>Sous-Total</span>
            <span>{subtotal.toFixed(2) + "€"}</span>
          </div>
          <div className="basket-total">
            <span>Frais de Livraison</span>
            <span>{deliveryFee.toFixed(2) + "€"}</span>
          </div>
          <div className="basket-total end-subtotal">
            <span>Frais de Service</span>
            <span>{serviceFee.toFixed(2) + "€"}</span>
          </div>
          <div className="basket-total">
            <span>Pourboire au livreur</span>
            <span>
              {" "}
              <span>
                <i
                  className="fas fa-minus-circle"
                  onClick={() => handleTipsClick(-1)}
                />
                <i
                  className="fas fa-plus-circle"
                  onClick={() => handleTipsClick(+1)}
                />
              </span>
              {tips.toFixed(2) + "€"}
            </span>
          </div>
          <div className="basket-total total-sum">
            <span>Total</span>
            <span>
              {" "}
              {(subtotal + deliveryFee + serviceFee + tips).toFixed(2) + "€"}
            </span>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.renderBasket(
      this.props.basket,
      this.props.handleAddAndRemoveClick,
      this.props.subtotal,
      this.props.deliveryFee,
      this.props.serviceFee,
      this.props.handleTipsClick,
      this.props.tips
    );
  }
}

export default Basket;
