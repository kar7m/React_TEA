import React, { Component } from "react";

import Card from "./components/Card";
import Partner from "./components/Partner";
import "./app.css";

import FirstImage from "./assets/image/one.png";
import SecondImage from "./assets/image/two.png";
import ThirthImage from "./assets/image/three.png";
import FourthImage from "./assets/image/four.png";
import FifethImage from "./assets/image/five.png";

import PartnerOne from "./assets/image/partnerOne.png";
import PartnerTwo from "./assets/image/partnerTwo.png";
import PartnerThree from "./assets/image/partnerThree.png";
import PartnerFour from "./assets/image/partnerFour.png";
import PartnerFive from "./assets/image/partnerFive.png";

const products = [
  {
    title: "Mivi Air Pods",
    img: FirstImage,
    rating:5,
    price: 500,
    // discountPrice: 480,
  },
  {
    title: "Gel",
    img: SecondImage,
    rating:4,
    price: 600,
    discountPrice: 560,
  },
  {
    title: "Gel",
    img: ThirthImage,
    rating:3,
    price: 700,
    discountPrice: 680,
  },
  {
    title: "Air Pods",
    img: FourthImage,
    rating:2,
    price: 800,
    discountPrice: 750,
  },
  {
    title: "Mivi Pods",
    img: FifethImage,
    rating:3,
    price: 900,
    discountPrice: 830,
  },
];

const partner = [
  PartnerOne,
  PartnerTwo,
  PartnerThree,
  PartnerFour,
  PartnerFive,
];

export default class App extends Component {
  render() {
    return (
      <div className={"wrapper"}>
        <div className={"header__banner"}>
          <div className={"header__image"}></div>
          <div className={"header__content"}>
            <h1>DICOVE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3 style={{ color: "darkorange" }}>Collection 2014</h3>
            <a href="https://www.example.com">
              Show Now <span className={"btn__symbol"}> &#10093; </span>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {products.map(
            ({ title, img, rating, price, discountPrice }, index) => {
              return (
                <Card
                  key={index}
                  title={title}
                  img={img}
                  rating={rating}
                  price={price}
                  discountPrice={discountPrice}
                />
              );
            }
          )}
        </div>
        <div className={"partner__area"}>
          {partner.map((image, index) => {
            return <Partner src={image} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
