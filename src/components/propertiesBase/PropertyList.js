import React from "react";
import Property from "../propertiesBase/Property";
const PropertyList = (props) => {
  const properties = props.properties.map((property, index) => (
    <Property
      key={index}
      dataId={index}
      property={property}
      deleteProperty={props.deleteProperty}
    />
  ));
  return (
    <>
      <table className="property-table">
        <thead>
          <tr>
            <th> No </th> <th> Street </th> <th> Town / City </th>{" "}
            <th> Date of purchase </th> <th> Cost of purchase </th>{" "}
            <th> Cost of rent </th> <th> Rented </th> <th> Action </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody> {properties} </tbody>{" "}
        <tfoot className="tfoot-table-property">
          <tr>
            <th colSpan="8" className="tfoot-col-property">
              {" "}
            </th>{" "}
          </tr>{" "}
        </tfoot>{" "}
      </table>{" "}
    </>
  );
};
export default PropertyList;
