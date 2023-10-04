import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        className="todo__input"
        placeholder="Enter Your Task"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
