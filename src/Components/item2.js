import React, { Component } from "react";
import data from "../data.json";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import "./item2.css";

class Item2 extends Component {
  render() {
    let { Color } = this.props;
    let { bgColor } = this.props;
    return (
      <div className="item2">
        <span className="it2">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={0}
          >
            <h6
              className="about"
              style={{
                color: Color,
                borderColor: Color
              }}
            >
              {data.nav.title1}
            </h6>
          </Link>
        </span>
        <h6
          style={{
            color: Color
          }}
        >
          |
        </h6>
        <span className="it2">
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={0}
          >
            <h6
              className="skills"
              style={{
                color: Color,
                borderColor: Color
              }}
            >
              {data.nav.title2}
            </h6>
          </Link>
        </span>
      </div>
    );
  }
}

export default Item2;
