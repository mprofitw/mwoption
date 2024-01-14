import React, { useEffect, useState } from "react";
import PropertyList from "../propertiesBase/PropertyList";
import AddPropertyForm from "../propertiesBase/AddPropertyForm";
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
      rented: false,
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
      rented: false,
    },
  ]);
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
   
    return true;
  };
  return (
    <>
      {showAddPropertyList ? (
        <div>
          <h1 className="title-properties"> Properties </h1>{" "}
          <div className="wrapper-properties">
            <button
              className="property-add-btn"
              onClick={handleAddPropertyForm}
            >
              Add property{" "}
            </button>{" "}
            <PropertyList
              properties={properties}
              deleteProperty={handleDeleteProperty}
            />{" "}
            <button
              className="property-add-btn"
              onClick={handleAddPropertyForm}
            >
              Add property{" "}
            </button>{" "}
          </div>{" "}
        </div>
      ) : null}{" "}
      {showAddPropertyForm ? (
        <AddPropertyForm
          handleShowPropertyForm={handleShowPropertyForm}
          add={addProperty}
        />
      ) : null}
    </>
  );
};
export default AddProperty;
