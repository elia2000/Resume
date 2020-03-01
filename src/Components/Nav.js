import React, { Component } from "react";
import Item1 from "./item1.js";
import Item2 from "./item2.js";
import data from "../data.json";
import "./Nav.css";

class Nav extends Component {
  render() {
    let { Color } = this.props;
    let { bgColor } = this.props;
    return (
      <div className="navcontainer">
        <Item2 Color={Color} bgColor={bgColor} />
      </div>
    );
  }
}

export default Nav;
