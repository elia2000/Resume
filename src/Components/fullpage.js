import React, { Component } from "react";
import "./fullpage.css";
import Snow from "./Snow";

class Fullpage extends Component {
  render() {
    const { children } = this.props;
    let { bgColor } = this.props;
    let { Color } = this.props;
    return (
      <div
        className={`fullpage ${this.props.className || ""}`}
        style={{
          backgroundColor: bgColor,
          Color: Color
        }}
      >
        {children}
        <Snow Color={Color} />
      </div>
    );
  }
}

export default Fullpage;
