import React, { Component } from "react";
import "./style.css";
class Rect extends Component {
  render() {
    return (
      <div
        className="rect"
        style={{
          height: this.props.rect.width,
          background: this.checkColor(),
          margin: this.props.marg,
          // float:'left',
          "vertical-align": "middle",
        }}
      >
        <div className="rectangle" key={this.props.rect.width}>
          {this.props.rect.width}
        </div> 
      </div>
    );
  }
  checkColor = () => {
    if (this.props.rect.isSorted) {
      return "green";
    } else if (this.props.rect.isSorting) {
      return "cyan";
    } else {
      return "black";
    }
  };
}

export default Rect;
