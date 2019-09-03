import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer />
      </div>
    );
  }
}

export default App;
