import React, { Component } from "react";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import data from "../data.json";

class UpArrow extends Component {
  render() {
    return (
      <Link
        activeClass="active"
        to="Top"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={0}
      >
        <img
          src={data.UpArrow}
          alt="UpArrow"
          width="30px"
          height="30px"
          className="UpArrow"
          style={{
            cursor: "pointer",
            position: "fixed",
            bottom: "20px",
            right: "20px"
          }}
        />
      </Link>
    );
  }
}

export default UpArrow;
