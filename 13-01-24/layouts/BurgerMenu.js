import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../sass/burgerMenu.scss";
const BurgerMenu = (props) => {
 
    const checkClassBurger = () => {
    let className = "burger-menu";
    if (!props.active) {
      return (className += " active-burger-menu");
    }
  };

  return (
    <>
      <div className={checkClassBurger()}>
        <ul className="burger-menu-list">
          <li>
            <NavLink className="burger-menu-item" to="/" exact="true">
              Home{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="burger-menu-item" to="/myaccount">
              My account{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="burger-menu-item" to="/settings">
              {" "}
              Settings{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="burger-menu-item" to="/help">
              {" "}
              Help{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink className="burger-menu-item" to="/contact">
              {" "}
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
