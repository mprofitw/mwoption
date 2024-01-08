import React from "react";
const AdditionalInfo = (props) => {
  return (
    <div className="wrapper-additional-info">
      <div className="title-financial-add-property">
        <p>Additional information</p>
      </div>
      <div className="wrapper-group">
      <div className="info-group">
          <label className="label-addInfo" htmlFor="rented">
            Rented
          </label>
          <select className="input-addInfo" id="rented">
            <option value="0" selected disabled>
              - Select -
            </option>
            <option value="A">Yes</option>
            <option value="B">No</option>
          
          </select>
          </div>
        <div className="info-group">
          <label className="label-addInfo" htmlFor="furnishing">
            Furnishing
          </label>
          <select className="input-addInfo" id="furnishing">
            <option value="0" selected disabled>
              - Select -
            </option>
            <option value="Unfurnished">Unfurnished</option>
            <option value="Partly Furnished">Partly Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
          </select>
        </div>
        <div className="info-group">
          <label className="label-addInfo" htmlFor="yearConstruction">
            Year of Construction
          </label>
          <input
            className="input-addInfo"
            type="number"
            name=""
            id="yearConstruction"
          />
        </div>
        <div className="info-group">
          <label className="label-addInfo" htmlFor="numberFloors">
            Number of floors
          </label>
          <input className="input-addInfo" type="number" name="" id="numberFloors" />
          </div>
          <div className="info-group">
          <label className="label-addInfo" htmlFor="epcRating">
            EPC Rating
          </label>
          <select className="input-addInfo" id="epcRating">
            <option value="0" selected disabled>
              - Select -
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
          </select>
          </div>
          <div className="info-group">
          <label className="label-addInfo" htmlFor="listAppliances">
          List of appliances
          </label>
          <div className="list-appliances">
          <input className="input-addInfo" type="checkbox" name="" id="garage" />
          <label className="label-addInfo" htmlFor="garage">Garage</label>
          <input className="input-addInfo" type="checkbox" name="" id="garden" />
          <label className="label-addInfo" htmlFor="garden">Garden</label>
          <input className="input-addInfo" type="checkbox" name="" id="carSpace" />
          <label className="label-addInfo" htmlFor="carSpace">Car Park spaces</label>
          <input className="input-addInfo" type="checkbox" name="" id="patio" />
          <label className="label-addInfo" htmlFor="patio">Patio</label>
          </div></div>
      </div>
     
      <div className="title-financial-add-property">
          <div className="btn-save-group">
            <button className="add-property-save-btn">Save</button>
            <button className="add-property-save-btn">Cancel</button>
          </div>
        </div>
    </div>
  );
};
export default AdditionalInfo;
