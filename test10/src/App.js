import React, { Component } from "react";
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import Card from "./components/Card";
import Brands from "./components/Brands";

import data from "./data.json";

export default class App extends Component {
  render() {
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
      </div>
    );
  }
}
