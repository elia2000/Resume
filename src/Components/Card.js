import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "./fullpage";
import "./Card.css";

class Card extends Component {
  render() {
    const { skillName } = this.props;
    let { Color } = this.props;
    let { bgColor } = this.props;
    return (
      <div
        className="card"
        style={{
          borderColor: Color
        }}
      >
        <div className="imgWapper">
          <img src={skillName.content.image} alt="img" className="img" />
        </div>
        <div className="titleWapper">
          <h4
            style={{
              color: Color,
              backgroundColor: bgColor
            }}
          >
            {skillName.content.title}
          </h4>
        </div>
      </div>
    );
  }
}

export default Card;
