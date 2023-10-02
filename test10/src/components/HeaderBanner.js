import React, { Component } from "react";

import WatchImage from "../assets/images/watchHeader.png"

export default class HeaderBanner extends Component {
  render() {
    return <div>
      <div className="header__banner">
          <div style={{width:"48%"}}> {<img src={WatchImage} alt="Watch" />} </div>
          <div className="header__content">
            <h1 className="HeadingOne">DICOVE &#174;</h1>
            <h4 className="HeadingFour">lorem ipsum | lorem ipsum | lorem ipsum</h4>
            <h2 className="HeadingTwo">Collection 2014!</h2>
            <a className="header__btn" href="www.Example.com">SHOP NOW &#x21e2;</a>
          </div>
      </div>
    </div>;
  }
}
