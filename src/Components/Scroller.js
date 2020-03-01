import React, { Component } from "react";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import data from "../data.json";

class Scroller extends Component {
  render() {
    let { Sec } = this.props;
    return (
      <Link
        activeClass="active"
        to={Sec}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={0}
      >
        <img
          src={data.DownArrow}
          alt="DownArrow"
          width="30px"
          height="30px"
          className="DownArrow"
          style={{
            cursor:"pointer"
          }}
        />
      </Link>
    );
  }
}

export default Scroller;
