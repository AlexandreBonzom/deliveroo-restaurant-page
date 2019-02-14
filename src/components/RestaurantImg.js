import React, { Component } from "react";

class RestaurantImg extends React.Component {
  render() {
    return (
      <img
        className="photo-restaurant"
        src={this.props.img}
        alt="photo-restaurant"
      />
    );
  }
}

export default RestaurantImg;
