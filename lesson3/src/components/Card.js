import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as StarIcon } from "../assets/icon/star.svg";

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
            <StarIcon
              className={item ? "star__filled" : "star__stroke"}
              key={index}
              width={16}
              height={16}
            />
          ))}
        </div>

        <div className={"priceAndDiscount"}>
          <p
            className={
              this.props.discountPrice
                ? "product__price__disabled"
                : "product_price"
            }
          >{`$${this.props.price}`}</p>
          {this.props.discountPrice && (
            <strong>{`$${this.props.discountPrice}`}</strong>
          )}
        </div>
        <button
          onClick={() => {
            alert(`${this.props.title} Added To Card`);
          }}
          className="add_product__btn"
        >
          Add To Card
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
};

Card.defaultProps = {
  title: "Card Name",
  rating: 0,
  price: 0,
};

export default Card;
