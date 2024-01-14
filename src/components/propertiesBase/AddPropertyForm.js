import React, { useContext, useEffect, useState } from "react";
import AddPropertyTopMenu from "../propertiesBase/AddPropertyTopMenu";
import AdditionalInfo from "../propertiesBase/AdditionalInfo";
import FinancialInfo from "../propertiesBase/FinancialInfo";
import Photos from "../propertiesBase/Photos";
import PropertyDetails from "../propertiesBase/PropertyDetails";
import DocumentsAddProp from "../propertiesBase/DocumentsAddProp";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [dateOfPurchase, setDateOfPurchase] = useState("");
  const [costOfPurchase, setCostOfPurchase] = useState("");
  const [rent, setRent] = useState("");
  const [isRented, setIsRented] = useState(false);

  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleDateOfPurchase = (e) => {
    setDateOfPurchase(e.target.value);
  };
  const handleCostOfPurchase = (e) => {
    setCostOfPurchase(e.target.value);
  };
  const handleRent = (e) => {
    setRent(e.target.value);
  };
  const handleIsRented = (e) => {
    setIsRented(e.target.value);
  };
  const handleClickAdd = () => {
     props.add(
        street,
        city,
        dateOfPurchase,
        costOfPurchase,
        rent,
        isRented
      );   
        setStreet("");
        setCity("");
        setDateOfPurchase("");
        setCostOfPurchase("");
        setRent("");   
      props.handleShowPropertyForm();
     };
  // const handleClickAdd = () => {
  //   if (street.length > 0)
  //    {
  //     const add = props.add(
  //       street,
  //       city,
  //       dateOfPurchase,
  //       costOfPurchase,
  //       rent,
  //       isRented
  //     );

  //     if (add) {
  //       setStreet("");
  //       setCity("");
  //       setDateOfPurchase("");
  //       setCostOfPurchase("");
  //       setRent("");
  //     }
  //     props.handleShowPropertyForm();
  //   }
  // };
 const clearForm = ()=>{
  setStreet("");
  setCity("");
  setDateOfPurchase("");
  setCostOfPurchase("");
  setRent("");
  props.handleShowPropertyForm()
 }

 useEffect(() => {

  setStreet(props.eProperty.street)
  setCity(props.eProperty.city)
  setDateOfPurchase(props.eProperty.dateOfPurchase)
  setCostOfPurchase(props.eProperty.costOfPurchase)
  setRent(props.eProperty.rent)
  setIsRented(props.eProperty.rented)
  console.log(props.properties);
 },[])

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
        />
        <form onSubmit={handleSubmit(handleClickAdd)}>
          <div className="content-add-property">
            <PropertyDetails
              showPropertyDetails={showPropertyDetails}
              handleShowPropertyForm={props.handleShowPropertyForm}
              street={street}
              city={city}
              handleStreet={handleStreet}
              handleCity={handleCity}
              register={register}
              errors={errors}
              watch={watch}
              // handleEdit={handleEdit}
            />
            {!showAddInfo ? (
              <AdditionalInfo
                handleIsRented={handleIsRented}
                isRented={isRented}
              />
            ) : null}
            {/* <AdditionalInfo showAddInfo={showAddInfo} /> */}
            <FinancialInfo
              showFinancialInfo={showFinancialInfo}
              costOfPurchase={costOfPurchase}
              dateOfPurchase={dateOfPurchase}
              rent={rent}
              handleDateOfPurchase={handleDateOfPurchase}
              handleCostOfPurchase={handleCostOfPurchase}
              handleRent={handleRent}
              handleShowPropertyForm={props.handleShowPropertyForm}
            />

            {!showDocuments ? <DocumentsAddProp /> : null}
            {!showPhotos ? <Photos /> : null}
            <div className="title-financial-add-property">
              <div className="btn-save-group">
                <button className="add-property-save-btn" type="submit" >
                  Save
                </button>
                <button
                  className="add-property-save-btn"
                  onClick={clearForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddProperty;
