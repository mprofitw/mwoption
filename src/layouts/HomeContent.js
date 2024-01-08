import React from "react";
import tourPeople from "../images/tour_people.png";
const HomeContent = () => {
  return (
    <>
      <img src={tourPeople} alt="" />
      <h1 className="homePage">
        Thank you for signing up! We are happy to have you on board!{" "}
      </h1>
    </>
  );
};

export default HomeContent;
