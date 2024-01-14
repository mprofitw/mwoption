import { useState, createContext, useContext } from "react";

const BasicInfo = (props) => {
  // const sumAssetValue = useContext(UserContext);
  return (
    <>
      <div className="wrapper-basic-info">
        <div className="number-properties">
          <i className="fa-sharp fa-solid fa-house"></i>
          <p>Number of all properties</p>
          <span>{props.numberOfProperties}</span>
        </div>
        <div className="number-short-term">
          <i className="fa-solid fa-suitcase"></i>
          <p>Short term let properties</p>
          <span>1</span>
        </div>
        <div className="rental-value">
          <i className="fa-solid fa-money-check-dollar"></i>
          <p>Occupied/Vacant{props.occupied.length}</p>
        </div>
        <div className="asset-value">
          <i className="fa-solid fa-wallet"></i>
          <p>Asset value</p>
          {/* {props.assetValue} */}
          {props.sumAssetValue}
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
