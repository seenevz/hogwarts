import React from "react";
import HogCard from "./HogCard";

const API = "http://localhost:3001/hogs";

class HogsContainer extends React.Component {
  state = {
    hogs: []
  };
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(hogs => this.setState({ hogs }));
  }

  render() {
    const hogs = this.state.hogs.map((hog, key) => {
      return <HogCard {...hog} key={key} />;
    });
    return <div className="ui cards">{hogs}</div>;
  }
}

export default HogsContainer;
