import React from "react";

const Box = (props) => {
  return (
    <div className="box bg-light rounded p-3">
      <h4 style={{ color: "#12416F" }}>{props.title}</h4>
      <p style={{ color: "#787E8F" }}>{props.description}</p>
      {props.subtitles?.map((link, index) => (
        <a className="nav-link" href="#" style={{ color: "#12416F" }}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default Box;
