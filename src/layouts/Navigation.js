import React from "react";
import "../sass/aside.scss";
import { NavLink, Route, Routes } from "react-router-dom";
// import Properties from "../components/Properties";
import Expenses from "../components/Expenses";

import house from "../images/3d-house.png";
import tenants from "../images/tenants.png";
import finance from "../images/finance.png";
import reports from "../images/reports.png";
import documentation from "../images/documentation.png";
import organiser from "../images/timetable.png";
import alerts from "../images/alerts.png";
import tools from "../images/tools.png";


const Navigation = (props) => {

  let className = 'menu-aside ';
    if (!props.active) {
      className += ' hide-menu-aside'
    }

  return (
    <>
      <nav className={className}>
      {/* <nav className="menu-aside "> */}
       
        <input className="inpu" type="radio" name="accordion" id="cb1" />
        <section className="box">
          <label className="box-title" htmlFor="cb1">
            <img className="side-menu__image " src={house} alt="house-img" />
            Properties{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            <NavLink to="/properties">
              {" "}
              <button className="box-content-button"> Properties </button>{" "}
            </NavLink>{" "}
                       <NavLink to="/expenses">
              {" "}
              <button className="box-content-button"> Expenses </button>{" "}
            </NavLink>{" "}
            <NavLink href="income.html">
              {" "}
              <button className="box-content-button"> Income </button>{" "}
            </NavLink>{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb2" />
        <section className="box">
          <label className="box-title" htmlFor="cb2">
            <img className="side-menu__image " src={tenants} alt="" />
            Tenants{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            Add the className 'arrows' to nav.accordion to add dropdown arrows.{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb3" />
        <section className="box">
          <label className="box-title" htmlFor="cb3">
            <img className="side-menu__image " src={finance} alt="" />
            Finance{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            <button className="box-content-button"> Mortgages </button>{" "}
            <a href="payments.html">
              {" "}
              <button className="box-content-button"> Payments </button>{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb4" />
        <section className="box">
          <label className="box-title" htmlFor="cb4">
            <img className="side-menu__image " src={reports} alt="" />
            Reports{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Quisque finibus tristique nisi, maximus
            ullamcorper ante finibus eget.{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb5" />
        <section className="box">
          <label className="box-title" htmlFor="cb5">
            <img className="side-menu__image " src={documentation} alt="" />
            Documents{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            <a href="folders.html">
              {" "}
              <button className="box-content-button"> Folders </button>{" "}
            </a>{" "}
            <a href="expenses.html">
              {" "}
              <button className="box-content-button"> Documents </button>{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb6" />
        <section className="box">
          <label className="box-title" htmlFor="cb6">
            <img className="side-menu__image " src={organiser} alt="" />
            Organiser{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            {/* <a href="tasks.html">
              {" "}
              <button className="box-content-button"> Tasks </button>{" "}
            </a>{" "} */}
            <NavLink to="/tasks">
              {" "}
              <button className="box-content-button"> Tasks </button>{" "}
            </NavLink>
            <a href="expenses.html">
              {" "}
              <button className="box-content-button"> Calendar </button>{" "}
            </a>{" "}
          </div>{" "}
        </section>
        <input type="radio" name="accordion" id="cb7" />
        <section className="box">
          <label className="box-title" htmlFor="cb7">
            <img className="side-menu__image " src={alerts} alt="" />
            Alerts{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Quisque finibus tristique nisi, maximus
            ullamcorper ante finibus eget.{" "}
          </div>{" "}
        </section>{" "}
        <input type="radio" name="accordion" id="cb8" />
        <section className="box">
          <label className="box-title" htmlFor="cb8">
            <img className="side-menu__image " src={tools} alt="" />
            Tools{" "}
          </label>{" "}
          <label className="box-close" htmlFor="acc-close">
            {" "}
          </label>{" "}
          <div className="box-content">
            <NavLink to="/mortgagecalculator">
              {" "}
              <button className="box-content-button">
                {" "}
                Mortgage calculators{" "}
              </button>{" "}
            </NavLink>{" "}
            <NavLink to="/calculator">
              {" "}
              <button className="box-content-button">
                {" "}
                Calculator{" "}
              </button>{" "}
            </NavLink>{" "}
          </div>{" "}
        </section>
        <input type="radio" name="accordion" id="acc-close" />
      </nav>{" "}
      {/* <Routes>
              <Route path="/" exact element={<Properties />} />{" "}
              <Route path="/properties" element={<Expenses />} />{" "}
            </Routes> */}{" "}
    </>
  );
};

export default Navigation;
