
import React from "react";
// import {propertyS} from "./AddProperty"
const AddPropertyTopMenu = (props) => {
    // const { Consumer } = propertyS
     return (
    //   <Consumer>
      <>
        <div className="menu-section">
          <button
            className={
              props.showPropertyDetails
                ? "add-property-menu-btn"
                : "add-property-menu-btn active-menu-btn"
            }
            onClick={props.handleShowPropertyDetails}
          >
            Property Details
          </button>
          <button
          className={
            props.showAddInfo
              ? "add-property-menu-btn"
              : "add-property-menu-btn active-menu-btn"
          }
            onClick={props.handleShowAddInfo}
          >
            Additional Info
          </button>
          <button
            className={
              props.showFinancialInfo
                ? "add-property-menu-btn"
                : "add-property-menu-btn active-menu-btn"
            }
            onClick={props.handleShowFinancialInfo}
          >
            Financial Info
          </button>
  
          <button
            className={
              props.showDocuments
                ? "add-property-menu-btn"
                : "add-property-menu-btn active-menu-btn"
            }
            onClick={props.handleShowDocuments}
          >
            Documents
          </button>
  
          <button
            className={
              props.showPhotos
                ? "add-property-menu-btn"
                : "add-property-menu-btn active-menu-btn"
            }
            onClick={props.handleShowPhotos}
          >
            Photos
          </button>
        </div>
       
      </>
    //    </Consumer>
    );
  };
  export default AddPropertyTopMenu