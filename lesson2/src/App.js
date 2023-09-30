import React, { Component } from "react";
import Card from "./components/Card";
import "./app.css"

import Partner from "./components/Partner";

import FirstImage from "./assets/img/one.png";
import SecondImage from "./assets/img/two.png";
import ThirthImage from "./assets/img/three.png";
import FourthImage from "./assets/img/four.png";
import FifethImage from "./assets/img/five.png";

import PartnerOne from "./assets/img/partnerOne.png"
import PartnerTwo from "./assets/img/partnerTwo.png"
import PartnerThree from "./assets/img/partnerThree.png"
import PartnerFour from "./assets/img/partnerFour.png"
import PartnerFive from "./assets/img/partnerFive.png"



const products = [
  {
    img: FirstImage,
    rating:5,
    price: 500,
    discountPrice: 480,
  },
  {
    title: "Mivi Air Pods Two",
    img: SecondImage,
    rating:4,
    price: 600,
  },
  {
    title: "Mivi Air Pods Three",
    img: ThirthImage,
    rating:3,
    price: 700,
    discountPrice: 680,
  },
  {
    title: "Mivi Air Pods Three",
    img: FourthImage,
    rating:5,
    price: 800,
    discountPrice: 750,
  },
  {
    title: "Mivi Air Pods Three",
    img: FifethImage,
    rating:2,
    discountPrice: 830,
  },
];

const partner = [PartnerOne, PartnerTwo, PartnerThree, PartnerFour,PartnerFive]

class App extends Component {

  render() {
    return (
        <div className={"wrapper"}>
          <div className={"header__banner"}>
            <div className={"header__image"}>
            </div>
            <div className={"header__content"}>
                <h1>DICOVE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h3 style={{color: "darkorange"}}>Collection 2014</h3>
              <a href="#">Show Now <span className={"btn__symbol"}> > </span></a>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {
             products.map(({ title, img, rating, price, discountPrice }, index) => {
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
              })
         }
          </div>
          <div className={"partner__area"}>
          {partner.map((image,index) => {
            return <Partner src={image} key={index}/>
          })}
          </div>
        </div>
    );
  }
}

export default App;
