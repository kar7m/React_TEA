import React, { Component } from "react";
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import Card from "./components/Card";
import Brands from "./components/Brands";

import data from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "red",
    };
  }

  getRandomvarColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    const { background } = this.state;
    return (
      <div className="wrapper">
        <HeaderBanner />
        <h4>NOT SALE PRODUCTS</h4>
        <hr />
        <div className="card__wrapper">
          {data.map(({ id, image, title, price, rating, discountPrice }) => {
            return (
              <Card
                img={image}
                key={id}
                title={title}
                price={price}
                discountPrice={discountPrice}
                rating={rating}
              />
            );
          })}
        </div>
        <h4>OUR BRANDS</h4>
        <hr />
        <Brands />
        <div style={{ width: "100px", height: "100px", background }}></div>
        <button
          onClick={() => {
            this.setState({ background: this.getRandomvarColor() });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
