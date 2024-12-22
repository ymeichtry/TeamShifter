import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app-header">
      <a href="/homepage" className="home-link">
        <i className="fas fa-home"></i>
      </a>
      <img
        className="logo"
        src="/Images/TeamShifterLogoBlue.svg"
        alt="TeamShifter Logo"
      />
    </div>
  );
};

export default Header;
