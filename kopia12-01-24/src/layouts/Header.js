import React from "react";
import logo5 from "../images/logo5.jpg";
import "../sass/header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img className="header__image" src={logo5} alt="" />
        </div>{" "}
        <div className="header-wrapper">
        <span className="header__logo-name"> Property Managment System </span>{" "}
        <div className="header__login">
          <span> Logged in as: mw@mojekompy.pl </span>{" "}
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
