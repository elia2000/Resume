import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../Components/fullpage";
import Scroller from "../Components/Scroller.js";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import "./About.css";

class About extends Component {
  render() {
    let { Color } = this.props;
    let { bgColor } = this.props;
    return [
      <Element name="About" />,
      <Fullpage
        Color={Color}
        bgColor={bgColor}
        style={{
          backgroundColor: bgColor
        }}
      >
        <h3
          style={{
            color: Color
          }}
        >
          {data.sections[0].title}
        </h3>
        <div>
          {data.sections[0].items.map(key => {
            return (
              <p
                style={{
                  color: Color
                }}
              >
                {key.content}
              </p>
            );
          })}
        </div>
        <div className="containerA">
          <Scroller Sec="Skills"/>
        </div>
      </Fullpage>
    ];
  }
}

export default About;
