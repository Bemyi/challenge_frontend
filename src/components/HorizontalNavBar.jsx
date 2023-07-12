import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaQuestionCircle, FaUser } from "react-icons/fa";

const HorizontalNavbar = () => {
  return (
    <nav
      className="navbar2 navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#EBECF3", borderColor: "black" }}
    >
      <div className="container-fluid">
        <h6 style={{ color: "#B3B5C7" }}>Municipio > Organismo</h6>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <BsSearch className="icon" />
            <FaBell className="icon" />
            <FaQuestionCircle className="icon" />
            <FaUser className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
