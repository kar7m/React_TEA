import React, { Component } from "react";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const arrStars = Array.from({ length: 5 });

export default class Card extends Component {
  render() {
    const stars = arrStars.map((item, index) => index < this.props.rating);

    return (
      <div className="card">
        <img src={this.props.img} alt="Card" />
        <h4 className="cart__title">{this.props.title}</h4>
        <div className="card__raiting">
          {stars.map((item, index) => (
            <StarIcon
              className={item ? "star__filled" : "stars__stroke"}
              key={index}
              width={16}
              height={16}
            />
          ))}
        </div>
        <div className="price__and__discount">
          <div className="product__price">
          {`$${this.props.price}`}
          </div>
          <div className="product__discount__price">
          {`$${this.props.discountPrice}`}
          </div>
        </div>
        <button className="add__produc__btn" onClick={() => {
          alert(`${this.props.title} Added To Card`)
        }}>Add To Card</button>
      </div>
    );
  }
}

