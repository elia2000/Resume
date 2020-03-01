import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../Components/fullpage";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import Scroller from "../Components/Scroller.js";
import "./HelloSec.css";

class Hellosec extends Component {
  render() {
    let { Color } = this.props;
    let { bgColor } = this.props;
    return [
      <Element name="Top" />,
      <Fullpage Color={Color} bgColor={bgColor}>
        <h1
          className="title"
          style={{
            color: Color
          }}
        >
          {data.title}
        </h1>
        <div>
          <h2
            style={{
              color: Color
            }}
          >
            {data.subtitle}
          </h2>
        </div>
        <div className="SocialsIcon">
          {Object.keys(data.links).map(key => {
            return (
              <SocialIcon
                url={data.links[key]}
                fgColor={Color}
                bgColor={bgColor}
                style={{ height: 75, width: 75 }}
              />
            );
          })}
        </div>
        <div className="containerH">
          <Scroller Sec="About" />
        </div>
      </Fullpage>
    ];
  }
}

export default Hellosec;
