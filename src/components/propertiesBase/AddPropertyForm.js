import React, { useContext, useEffect, useState } from "react";
import AddPropertyTopMenu from "../propertiesBase/AddPropertyTopMenu";
import AdditionalInfo from "../propertiesBase/AdditionalInfo";
import FinancialInfo from "../propertiesBase/FinancialInfo";
import Photos from "../propertiesBase/Photos";
import PropertyDetails from "../propertiesBase/PropertyDetails";
import DocumentsAddProp from "../propertiesBase/DocumentsAddProp";

const AddProperty = (props) => {
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(true);
  const [showFinancialInfo, setShowFinancialInfo] = useState(true);
  const [showDocuments, setShowDocuments] = useState(true);
  const [showPhotos, setShowPhotos] = useState(true);

  const handleShowPropertyDetails = () => {
    setShowPropertyDetails(false);
    setShowFinancialInfo(true);
    setShowDocuments(true);
    setShowPhotos(true);
    setShowAddInfo(true);
  };
  const handleShowFinancialInfo = () => {
    setShowFinancialInfo(false);
    setShowPropertyDetails(true);
    setShowDocuments(true);
    setShowPhotos(true);
    setShowAddInfo(true);
  };
  const handleShowDocuments = () => {
    setShowDocuments(false);
    setShowPropertyDetails(true);
    setShowFinancialInfo(true);
    setShowPhotos(true);
    setShowAddInfo(true);
  };
  const handleShowPhotos = () => {
    setShowPhotos(false);
    setShowPropertyDetails(true);
    setShowFinancialInfo(true);
    setShowDocuments(true);
    setShowAddInfo(true);
  };
  const handleShowAddInfo = () => {
    // setShowAddInfo(!showAddInfo);
    setShowAddInfo(false);
    setShowPropertyDetails(true);
    setShowFinancialInfo(true);
    setShowDocuments(true);
    setShowPhotos(true);
  };
 
  return (
    <>
      <div className="wrapper-add-property">
        <h1 className="title-addProperty"> New property </h1>{" "}
        <AddPropertyTopMenu
          showPropertyDetails={showPropertyDetails}
          showAddInfo={showAddInfo}
          handleShowPropertyDetails={handleShowPropertyDetails}
          handleShowAddInfo={handleShowAddInfo}
          handleShowFinancialInfo={handleShowFinancialInfo}
          handleShowDocuments={handleShowDocuments}
          showFinancialInfo={showFinancialInfo}
          showDocuments={showDocuments}
          handleShowPhotos={handleShowPhotos}
          showPhotos={showPhotos}
        />{" "}
        <div className="content-add-property">
          <PropertyDetails
            showPropertyDetails={showPropertyDetails}
            handleShowPropertyForm={props.handleShowPropertyForm}
            add={props.add}
          />{" "}
          {!showAddInfo ? <AdditionalInfo /> : null}
          {/* <AdditionalInfo showAddInfo={showAddInfo} /> */}{" "}
          <FinancialInfo showFinancialInfo={showFinancialInfo} />{" "}
          {!showDocuments ? <DocumentsAddProp /> : null}{" "}
          {!showPhotos ? <Photos /> : null}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default AddProperty;
