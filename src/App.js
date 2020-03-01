import React, { Component } from "react";
import data from "./data.json";
import logo from "./logo.svg";
import Nav from "./Components/Nav.js";
import Hellosec from "./Sections/HelloSec.js";
import About from "./Sections/About.js";
import Skills from "./Sections/Skills.js";
import { render } from "@testing-library/react";
import UpArrow from "./Components/UpArrow.js";
import "./App.css";

class App extends Component {
  // ***  Color Changer START ***
  constructor(props) {
    super(props);
    this.state = {
      color: data.nav.colors.Color[0],
      bgColor: data.nav.colors.bgColor[0],
      itt: 0
    };
  }
  changeColor = () => {
    let { Color } = data.nav.colors;
    let { bgColor } = data.nav.colors;
    if (this.state.itt + 1 >= data.nav.colors.Color.length) {
      this.setState({
        itt: 0,
        bgColor: bgColor[0],
        color: Color[1]
      });
    } else {
      this.setState({
        itt: this.state.itt + 1,
        Color: Color[this.state.itt],
        bgColor: bgColor[this.state.itt]
      });
    }
  };
  // ***  Color Changer END ***
  render() {
    return (
      <div className="App" onLoad={this.changeColor}>
        <Nav Color={this.state.Color} bgColor={this.state.bgColor} />
        <img
          src={data.nav.icon}
          alt="wizard-ico"
          width="25px"
          height="25px"
          className="wizard"
          onClick={this.changeColor}
        />
        <Hellosec Color={this.state.Color} bgColor={this.state.bgColor} />
        <About Color={this.state.Color} bgColor={this.state.bgColor} />
        <Skills Color={this.state.Color} bgColor={this.state.bgColor} />
        <UpArrow />
      </div>
    );
  }
}

export default App;
