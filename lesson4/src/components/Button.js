import React, { Component } from 'react'

const classNames = {
    primary:"add__task",
    secondary:"done__btn",
    thirthary:"delete__btn",
}

export default class Button extends Component {

  render() {
    return (
        <button className={classNames[this.props.type]} onClick={this.props.handleClick}>{this.props.text}</button>
    )
  }
}
