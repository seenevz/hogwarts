import React from "react";

const HogDetails = props => {
  return (
    <React.Fragment>
      <div className="content">
        <a className="header">{props.name}</a>
        <div className="meta">
          <span className="date">Weight: {props.weight}</span>
        </div>
        <div className="description">
          Specialty: {props.specialty} <br />
          Highest medal achieved: {props["highest medal achieved"]}
        </div>
      </div>
      <div className="extra content">
        <input name={props.greased} type="checkbox" value={props.greased} />
        <label htmlFor={props.greased}> greased</label>
      </div>
    </React.Fragment>
  );
};

export default HogDetails;
