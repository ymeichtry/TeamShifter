import React from "react";
import "./Header.css";

import Logo from "../../images/TeamShifterLogoBlue.svg";

const Header = () => {
  return (
    <div className="app-header">
      <a href="/homepage" className="home-link">
        <i className="fas fa-home"></i>
      </a>
      <img
        className="logo"
        src={Logo}
        alt="TeamShifter Logo"
      />
    </div>
  );
};

export default Header;
