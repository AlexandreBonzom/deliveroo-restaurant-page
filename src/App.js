import React, { Component } from "react";
import Header from "./components/Header/Header";
import Restaurant from "./components/Restaurant/Restaurant";

import Menu from "./components/Menu/Menu";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    restaurant: {},
    menu: {},
    basket: [],
    subtotal: 0,

    paymentOptions: { tips: 0, deliveryFee: 2.5, serviceFee: 0.2 }
  };

  componentDidMount = () => {
    axios
      .get("https://deliveroo-api.now.sh/menu")
      .then(response => response.data, error => console.log(error))
      .then(data =>
        this.setState({ restaurant: data.restaurant, menu: data.menu })
      );
  };

  renderMainPage = () => {
    if (this.state.restaurant.name) {
      return (
        <>
          <Header />
          <div className="restaurant-container">
            <Restaurant restaurant={{ ...this.state.restaurant }} />
          </div>
          <div className="menu-container">
            <Menu
              {...this.state}
              handleclickdish={this.handleClickDish}
              handleAddAndRemoveClick={this.handleAddAndRemoveClick}
              handleTipsClick={this.handleTipsClick}
            />
          </div>
        </>
      );
    } else {
      return <div className="loading">Chargement en cours...</div>;
    }
  };

  handleClickDish = dish => {
    const newBasket = this.state.basket;
    const newDish = {};
    let subtotal = this.state.subtotal;

    if (
      newBasket.filter(orderedDish => orderedDish.id === dish.id).length === 0
    ) {
      newDish.price = dish.price;
      subtotal += Number(dish.price);

      newDish.name = dish.title;
      newDish.id = dish.id;
      newDish.quantity = 1;
      newBasket.push(newDish);
      this.setState({
        basket: newBasket,
        subtotal: subtotal
      });
    } else if (
      newBasket.filter(orderedDish => orderedDish.id === dish.id).length === 1
    ) {
      newBasket.map(elDish => {
        if (elDish.name === dish.title) {
          subtotal += Number(dish.price);
          elDish.quantity++;
        }
        return elDish;
      });
      this.setState({
        basket: newBasket,
        subtotal: subtotal
      });
    }
  };

  handleAddAndRemoveClick = (quantity, index) => {
    const basket = this.state.basket;
    let subtotal = this.state.subtotal;
    if (basket[index].quantity >= 1) {
      basket[index].quantity = basket[index].quantity + quantity;
      subtotal = subtotal + basket[index].price * quantity;
      if (basket[index].quantity === 0) {
        basket.splice(index, 1);
      }
    }
    this.setState({ basket: basket, subtotal: subtotal });
  };

  handleTipsClick = quantity => {
    const newPaymentOptions = this.state.paymentOptions;

    if (!(newPaymentOptions.tips <= 0 && quantity === -1)) {
      newPaymentOptions.tips += quantity;
      this.setState({ paymentOptions: newPaymentOptions });
    }
  };

  render() {
    return <div className="App">{this.renderMainPage()}</div>;
  }
}

export default App;
