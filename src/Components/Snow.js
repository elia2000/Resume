import React, { Component } from "react";
import SnowStorm from "react-snowstorm";

class Snow extends Component {
  render() {
	let { Color } = this.props;
    return (
      <div>
        <SnowStorm
          flakesMax={96}
          flakesMaxActive={96}
          followMouse=" false"
          snowCharacter="*"
          snowColor="#777"
          vMaxY={5}
          vMaxX={1}
        />
      </div>
    );
  }
}

export default Snow;
