import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import "../sass/burgerMenu.scss";
// import ErrorPage from "./ErrorPage";
// import HomeContent from "./HomeContent";
// import MyAccount from "./MyAccount";
// import Help from "./Help";

import "../sass/top_menu.scss";
const TopMenu = (props) => {
let className = 'top-menu';
    if (!props.active) {
      className += ' active-top-menu'
    }


  return (
    <>
     <nav className={className}>
        
        <ul className="menu-list">
          <li>
            <NavLink className="menu-item" to="/" exact="true">
              Home{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="menu-item" to="/myaccount">
              My account{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="menu-item" to="/settings">
              {" "}
              Settings{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="menu-item" to="/help">
              {" "}
              Help{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="menu-item" to="/contact">
              {" "}
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
       
      </nav>{" "}
 
    </>
  );
};

export default TopMenu;
