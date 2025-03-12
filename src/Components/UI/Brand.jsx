import React from "react";
import BengalLogo from "../../assets/bengal-icon.svg";
import { Navbar } from "react-bootstrap";

const Brand = ({ title, className }) => {
  return (
    <Navbar data-bs-theme="dark" className="brand">
      <div className="brand-left">
        <Navbar.Brand href="/" className="text-fair-win">
          <img alt="" src={BengalLogo} className="svg-icon" />
          &nbsp; FAIRWIN
        </Navbar.Brand>
      </div>
      <div className="brand-title">
        <span className={className}>{title}</span>
      </div>
    </Navbar>
  );
};

export default Brand;
