import React, { Component } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import MenuNav from "./components/MenuNav";
import Menu from "./components/Menu";
import "./App.css";

import axios from "axios";
import Logo from "./components/Logo";

class App extends Component {
  state = {
    restaurant: {},
    menu: {},
    basket: [],
    subtotal: 0,

    tips: 0,
    deliveryFee: 2.5,
    serviceFee: 0.2
  };

  componentDidMount = async () => {
    try {
      const fullInfoRestaurant = await axios
        .get("https://deliveroo-api.now.sh/menu")
        .then(response => response.data);

      const restaurant = fullInfoRestaurant.restaurant;
      const menu = fullInfoRestaurant.menu;

      this.setState({ restaurant: restaurant, menu: menu });
    } catch (error) {
      alert("there is an error when trying to get restaurant information");
    }
  };

  renderMainPage = (
    restaurant,
    menu,
    handleclickdish,
    basket,
    handleAddAndRemoveClick,
    subtotal,
    deliveryFee,
    serviceFee,
    handleTipsClick,
    tips
  ) => {
    if (restaurant.name) {
      return (
        <div className="App">
          <Header />
          <div className="restaurant-container">
            <Restaurant restaurant={{ ...restaurant }} />
          </div>
          <div className="menu-container">
            <Menu
              menu={{ ...menu }}
              basket={[...basket]}
              handleclickdish={handleclickdish}
              handleAddAndRemoveClick={handleAddAndRemoveClick}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              serviceFee={serviceFee}
              handleTipsClick={handleTipsClick}
              tips={tips}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div className="loading">Chargement en cours...</div>
        </div>
      );
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
          elDish.quantity++;
          subtotal += Number(dish.price);
        }
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
    let newTips = this.state.tips;
    if (!(newTips <= 0 && quantity === -1)) {
      newTips += quantity;
      this.setState({ tips: newTips });
    }
  };

  render() {
    return this.renderMainPage(
      this.state.restaurant,
      this.state.menu,
      this.handleClickDish,
      this.state.basket,
      this.handleAddAndRemoveClick,
      this.state.subtotal,
      this.state.deliveryFee,
      this.state.serviceFee,
      this.handleTipsClick,
      this.state.tips
    );
  }
}

export default App;
