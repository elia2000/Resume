import React, { Component } from "react";
import data from "../data.json";
import "./item1.css";

class Item1 extends Component {
  render() {
    return (
      <div className="item1">
        <img
          src={data.nav.icon}
          alt="wizard-ico"
          width="25px"
          height="25px"
          className="wizard"
        />
        <h6 className="colorChenge">Color-Chenger</h6>
      </div>
    );
  }
}

export default Item1;
