import React, { Component } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import MenuNav from "./components/MenuNav";
import Menu from "./components/Menu";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    restaurant: {},
    menu: {}
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

  renderMainPage = (restaurant, menu) => {
    if (restaurant.name) {
      return (
        <div className="App">
          <Header />
          <Restaurant restaurant={{ ...restaurant }} />

          <Menu menu={{ ...menu }} />
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

  render() {
    return this.renderMainPage(this.state.restaurant, this.state.menu);
  }
}

export default App;
