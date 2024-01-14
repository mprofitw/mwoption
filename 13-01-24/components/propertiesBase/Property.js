import React from "react";
const Property = (props) => {
  const {id} = props.property
  return (
    <>
    
      <tr data-id={props.dataId}>
        <td>{props.dataId + 1}</td>
        <td className="choose-property">{props.property.street}</td>
        <td>{props.property.city}</td>
        <td>{props.property.dateOfPurchase}</td>
        <td>{props.property.costOfPurchase}</td>
        <td>{props.property.rent}</td>
        <td>
          {" "}
          {props.property.rented ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-solid fa-square-xmark"></i>
          )}
        </td>
        {/* <td>{props.property.rented.toString()}</td> */}

        <td>
          <i
            className="fa-solid fa-pen-to-square"
            // onClick={props.editProperty}
            onClick={()=>props.edit(id)}
          ></i>
          <i className="fa-solid fa-trash" onClick={()=>props.deleteProperty2(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default Property;
