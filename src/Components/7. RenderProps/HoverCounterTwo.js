import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    return (
      <h3 onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} times
      </h3>
    );
  }
}

export default HoverCounterTwo;
