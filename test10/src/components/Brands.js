import React, { Component } from "react";

import BrandOne from "../assets/images/partnerOne.png";
import BrandTwo from "../assets/images/partnerTwo.png";
import BrandThree from "../assets/images/partnerThree.png";
import BrandFour from "../assets/images/partnerFour.png";
import BrandFive from "../assets/images/partnerFive.png";

const arrBrands = [BrandOne, BrandTwo, BrandThree, BrandFour, BrandFive];

export default class Brands extends Component {
  render() {
    return (
      <div>
        <div className="brands__wrapper">
          {arrBrands.map((brand, index) => (
            <img src={brand} alt="Brand" key={index} />
          ))}
        </div>
      </div>
    );
  }
}
