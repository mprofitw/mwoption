import React, { useEffect, useState, createContext, useContext } from "react";
import PropertyList from "../propertiesBase/PropertyList";
import AddPropertyForm from "../propertiesBase/AddPropertyForm";
import BasicInfo from "./BasicInfo";
import {v4 as uuidv4 } from "uuid"
const AddProperty = () => {
  const [properties, setProperties] = useState([
    {
      id: 0,
      street: "12 Clergy Street",
      city: "Macduff",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 57000,
      rent: 470,
      rented: false,
    },
    {
      id: 1,
      street: "28 Market Street",
      city: "Macduff",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 90000,
      rent: 470,
      rented: true,
    },
    {
      id: 2,
      street: "19 Fountain Park",
      city: "Banff",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 105000,
      rent: 470,
      rented: false,
    },
    {
      id: 3,
      street: "1 Grant Street",
      city: "Turriff",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 90000,
      rent: 470,
      rented: false,
    },
    {
      id: 4,
      street: "14/a Corskie Drive",
      city: "Turriff",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 90000,
      rent: 470,
      rented: false,
    },
    {
      id: 5,
      street: "69 Meadow Walk",
      city: "Buckie",
      dateOfPurchase: "2020-05-21",
      costOfPurchase: 90000,
      rent: 470,
      rented: true,
    },
  ]);
  const [deleteInfo, setDeleteInfo] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [showConfirmDel, setShowConfirmDel] = useState(false);
  const [showConfirmAd, setShowConfirmAd] = useState(false);
  const showConfirmDelete = () => {
    setDeleteInfo("Property deleted successfully");
    setShowConfirmDel(true);
    setTimeout(() => {
      setDeleteInfo("");
      setShowConfirmDel(false);
    }, 4000);
  };
  const showConfirmAdd = () => {
    setAddInfo("Property added successfully");
    setShowConfirmAd(true);
    setTimeout(() => {
      setAddInfo("");
      setShowConfirmAd(false);
    }, 4000);
  };

  const deleteProperty = (id) => {
    // console.log("Usuwam index" + id);
    //   let propertiesNew = [...properties];
    //   propertiesNew = properties.filter(property => property.id !== id)
    //  setProperties(propertiesNew)
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm("Are you sure you want to delete the selected property?") ===
      false
    ) {
      return;
    }
    let propertiesNew = [...properties];
    const index = propertiesNew.findIndex((property) => property.id === id);
    propertiesNew.splice(index, 1);
    setProperties(propertiesNew);
  };
  const [eProperty, setEProperty] = useState([]);
  const edit = (id) => {
    // console.log("Znalazlem index do edycji" + id);
    let propertiesNew = [...properties];
    const index = propertiesNew.findIndex((property) => property.id === id);
    handleShowPropertyForm();
    const editPropertyNew = {
      // id: properties[index].id,
      street: properties[index].street,
      city: properties[index].city,
      dateOfPurchase: properties[index].dateOfPurchase,
      costOfPurchase: properties[index].costOfPurchase,
      rent: properties[index].rent,
      rented: properties[index].rented,
    };

    setEProperty(editPropertyNew);
    
    let propertiesTemp = [...properties];
   const abc = propertiesTemp.splice(index, 1,editPropertyNew);
    setProperties(abc);
  //   console.log(properties);

    //   let propertiesTemp = [...tasks];
  //  const abc = properties.splice(index, 1,editTask);
  //   setProperties(abc);
  //   console.log(properties);
  };

  const handleDeleteProperty = (e) => {
    const id = Number(e.target.parentNode.parentNode.dataset.id);
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm("Are you sure you want to delete the selected property?") ===
      false
    ) {
      return;
    }
    const propertiesNew = [...properties];
    propertiesNew.splice(id, 1);
    setProperties(propertiesNew);
    showConfirmDelete();
  };
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);
  const [showAddPropertyList, setShowAddPropertyList] = useState(true);

  const handleAddPropertyForm = () => {
    setShowAddPropertyForm(!showAddPropertyForm);
    setShowAddPropertyList(!showAddPropertyList);
  };

  const handleShowPropertyForm = () => {
    setShowAddPropertyForm(!showAddPropertyForm);
    setShowAddPropertyList(!showAddPropertyList);
    assetValue();
  };
  const addProperty = (
    street,
    city,
    dateOfPurchase,
    costOfPurchase,
    rent,
    rented
  ) => {
    const newProperty = {
      street: street,
      city: city,
      dateOfPurchase: dateOfPurchase,
      costOfPurchase: costOfPurchase,
      rent: rent,
      rented: rented,
    };
    setProperties([...properties, newProperty]);
    showConfirmAdd();
    return true;
  };
 
  
  const occupied = properties.filter((el) => {
    return el.rented === true;
  });

  const [sumAssetValue, setSumAssetValue] = useState(0);
  const assetValue = () => {
    setSumAssetValue(sumAssetValue + 1);
  };
  useEffect(() => {
    
    let sum = 0;
    properties.forEach((el) => {
      sum += el.costOfPurchase;
    });
    setSumAssetValue(sumAssetValue + sum);
  }, []);
  // const UserContext = createContext();

  return (
    <>
      {showAddPropertyList ? (
        <div>
          <h1 className="title-properties"> Properties </h1>
          <BasicInfo
            numberOfProperties={properties.length}
            sumAssetValue={sumAssetValue}
            // assetValue={assetValue()}
            occupied={occupied}
          />
          {/* <UserContext.Provider
            // numberOfProperties={properties.length}
            value={sumAssetValue}

          >
            <BasicInfo />
            <h1>{`Hello ${sumAssetValue}!`}</h1>
           
          </UserContext.Provider> */}
          <div className="wrapper-properties">
            <div className="wrapper-confirm-message">
              <p
                className="show-confirm"
                style={{
                  background: showConfirmDel ? "red" : "green",
                  visibility:
                    showConfirmDel || showConfirmAd ? "visible" : "hidden",
                }}
              >
                {addInfo}
                {deleteInfo}
              </p>
              <button
                className="property-add-btn"
                onClick={handleAddPropertyForm}
              >
                Add property
              </button>
            </div>
            <PropertyList
              properties={properties}
              deleteProperty={handleDeleteProperty}
              deleteProperty2={deleteProperty}
              edit={edit}
            />
            <button
              className="property-add-btn"
              onClick={handleAddPropertyForm}
            >
              Add property
            </button>
          </div>
        </div>
      ) : null}
      {showAddPropertyForm ? (
        <AddPropertyForm
          handleShowPropertyForm={handleShowPropertyForm}
          add={addProperty}
          properties={properties}
          edit={edit}
          eProperty={eProperty}
        />
      ) : null}
    </>
  );
};
export default AddProperty;
