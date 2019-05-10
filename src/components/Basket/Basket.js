import React from "react";

const Basket = ({
  basket,
  handleAddAndRemoveClick,
  subtotal,
  paymentOptions,
  handleTipsClick
}) => {
  const renderBasket = () => {
    if (!basket.length) {
      return (
        <>
          <div className="basket-empty-validate-button">Valider mon panier</div>
          <div className="basket-empty">Votre Panier est vide</div>
        </>
      );
    }
    return (
      <>
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
          <span>{paymentOptions.deliveryFee.toFixed(2) + "€"}</span>
        </div>
        <div className="basket-total end-subtotal">
          <span>Frais de Service</span>
          <span>{paymentOptions.serviceFee.toFixed(2) + "€"}</span>
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
            {paymentOptions.tips.toFixed(2) + "€"}
          </span>
        </div>
        <div className="basket-total total-sum">
          <span>Total</span>
          <span>
            {" "}
            {(
              subtotal +
              paymentOptions.deliveryFee +
              paymentOptions.serviceFee +
              paymentOptions.tips
            ).toFixed(2) + "€"}
          </span>
        </div>
      </>
    );
  };

  return <div className="basket">{renderBasket()}</div>;
};

export default Basket;
