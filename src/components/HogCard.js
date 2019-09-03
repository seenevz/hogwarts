import React from "react";
import HogDetails from "./HogDetail";

class HogCard extends React.Component {
  state = {
    clicked: false
  };

  handleGreaseClick = () => {
    console.log("oink");

    this.setState({ clicked: !this.state.cliked });
  };

  getImg = hogName => {
    const snakedName = hogName
      .split(" ")
      .join("_")
      .toLowerCase();

    return require(`../hog-imgs/${snakedName}.jpg`);
  };

  render() {
    return (
      <div
        onClick={() => this.handleGreaseClick()}
        className="ui raised link card"
      >
        <div className="image">
          <img src={this.getImg(this.props.name)} alt={this.props.name} />
        </div>
        {this.state.cliked ? <HogDetails {...this.props} /> : null}
      </div>
    );
  }
}

export default HogCard;
