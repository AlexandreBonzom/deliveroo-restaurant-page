import React, { Component } from "react";
import RestaurantImg from "./RestaurantImg";
import { SlowBuffer } from "buffer";

class Restaurant extends React.Component {
  render() {
    const restaurant = this.props.restaurant;
    return (
      <div className="restaurant">
        <div className="description-restaurant">
          <h2>{restaurant.name}</h2>
          <div className="contact-main-info">
            <span>{restaurant.ratings}</span>
            {"·"}
            {restaurant.categories.map((category, index) => {
              return (
                <span key={index}>
                  <span>{category}</span>
                  <span>{"·"}</span>
                </span>
              );
            })}
            <span>{restaurant.address}</span>
            {"·"}
            <span>{restaurant.phone}</span>
          </div>
          <div>
            <span>{restaurant.description}</span>
          </div>
        </div>
        <RestaurantImg img={restaurant.picture} />
      </div>
    );
  }
}

export default Restaurant;
