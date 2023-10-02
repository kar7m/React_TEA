import React, { Component } from "react";
import "./card.css";
import PropTypes from "prop-types";

import StarImage from "../../assets/icons/stars.png";
import starStrock from "../../assets/icons/starStrok.png";

const arrRatings = Array.from({ length: 5 });

class Card extends Component {
  render() {
    const stars = arrRatings.map((_, index) => index < this.props.rating);

    return (
      <div className={"card_wrapper"}>
        <img src={this.props.img} alt="product" />
        <h4>{this.props.title}</h4>
        <div className={"allStars"}>
          {stars.map((item, index) => (
            <img key={index} src={item ? StarImage : starStrock} alt="star" />
          ))}
        </div>
        <div className={"priceAndDiscount"}>
          <p className={"product__price"}>{`$${this.props.price}`}</p>
          <strong>{`$${this.props.discountPrice}`}</strong>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating:PropTypes.number,
    price:PropTypes.number,
    discountPrice:PropTypes.number,
};

Card.defaultProps = {
  title: "Card Name",
    rating:0,
    price:0,
    discountPrice:0,
};

export default Card;
