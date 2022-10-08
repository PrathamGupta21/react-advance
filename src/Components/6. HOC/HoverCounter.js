import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <h5 onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} times
      </h5>
    );
  }
}

export default withCounter(HoverCounter, 10);
