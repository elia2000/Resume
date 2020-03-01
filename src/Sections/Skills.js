import React, { Component } from "react";
import Fullpage from "../Components/fullpage";
import Card from "../Components/Card.js";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";
import data from "../data.json";
import "./Skill.css";

class Skills extends Component {
  render() {
    let { Color } = this.props;
    let { bgColor } = this.props;
    return [
      <Element name="Skills" type="Arrow"/>,
      <Fullpage Color={Color} bgColor={bgColor}>
        <h5
          style={{
            color: Color,
            backgroundColor: bgColor
          }}
        >
          Skills
        </h5>
        <div className="cardsWarpper">
          {data.sections[1].items.map(skill => {
            return <Card Color={Color} bgColor={bgColor} skillName={skill} />;
          })}
        </div>
      </Fullpage>
    ];
  }
}

export default Skills;
