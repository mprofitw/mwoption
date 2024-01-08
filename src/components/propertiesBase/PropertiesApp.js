import React, { useState } from "react";
import "../../sass/properties.scss";
import AddProperty from "../propertiesBase/AddProperty";

const handleAddProperty =() => {
    <AddProperty />
}
const Properties = () => {
  return (
    <>
      <h1 className="title-properties">Properties </h1>
      <button className="add-property-btn" onClick={handleAddProperty}>Add Property</button>
      <AddProperty />
    </>
  );
};
export default Properties;
