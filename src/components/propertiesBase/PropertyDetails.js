import React, { useState } from "react";
import { useForm } from "react-hook-form";
const PropertyDetails = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  console.log(watch(street));
  if (props.showPropertyDetails) {
    return null;
  }

  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleClickAdd = (e) => {
    // e.preventDefault();

    if (street.length > 0) {
      const add = props.add(
        street,
        city
        // dateOfPurchase,
        // costOfPurchase,

        // property,
        // dueDate,
        // statusTask,
        // priority,
        // notes
      );

      if (add) {
        setStreet("");
        setCity("");
        // this.setState({
        //   taskName: "",
        //   taskType: 0,
     
        console.log(props.properties);
      }
      props.handleShowPropertyForm();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleClickAdd)}>
        <div className="title-content-add-property">
          <p>Address</p>
        </div>
        <div className="middle-content-add-property">
          <div className="label-group-address">
            <label htmlFor="street">
              Street<span>*</span>
            </label>
            <label htmlFor="city">
              Town/City<span>*</span>
            </label>
            <label htmlFor="postcode">
              Postcode<span>*</span>
            </label>
            <label htmlFor="region">County/Region</label>
          </div>
          <div className="input-group-address">
            <input
              className="input-address"
              // {...register("street", { required: true })}

              {...register("street", {
                required: true,
                onChange: handleStreet,
                minLength: 3,
                maxLength: 5,
              })}
              type="text"
              id="street"
              name="street"
              value={street}
              // onChange={handleStreet}
            />
            {errors.street && (
              <span className="form-error">Street field is required</span>
            )}
            {errors.street?.type === "minLength" && (
              <span className="form-error">At least 3 chars</span>
            )}
            {errors.userName?.type === "maxLength" && (
              <span className="form-error">At most 5 chars</span>
            )}
            <input
              {...register("city", { required: true })}
              className="input-address"
              type="text"
              id="city"
              value={city}
              onChange={handleCity}
            />
            {errors.city && (
              <span className="form-error">City field is required</span>
            )}
            <input className="input-address" type="text" id="postcode" />
            <input className="input-address" type="text" id="region" />
          </div>
        </div>
        <div className="title-content-add-property">
          <p>Description</p>
        </div>
        <div className="wrapper-description">
          <div className="label-group-address">
            <label htmlFor="shortTerm">Short term let</label>
            <label htmlFor="typeProperty">
              Type of property<span>*</span>
            </label>
            <label htmlFor="size">Size m2</label>
            <label htmlFor="numberRooms">Number of rooms</label>
            <label htmlFor="numberBedrooms">Number of bedrooms</label>
            <label htmlFor="numberKitchen">Number of kitchen</label>
            <label htmlFor="numberBathroom">Number of bathrooms</label>
          </div>
          <div className="input-group-address">
            <input type="checkbox" name="" id="shortTerm" />
            <select className="input-address" id="typeProperty">
              <option value="0" selected disabled>
                - Select -
              </option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Studio">Studio</option>
              <option value="Semi Detached">Semi Detached</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Other">Other</option>
            </select>
            <input className="input-address" type="check" id="size" />
            <input className="input-address" type="number" id="numberRooms" />
            <input
              className="input-address"
              type="number"
              id="numberBedrooms"
            />
            <input className="input-address" type="number" id="numberKitchen" />
            <input
              className="input-address"
              type="number"
              id="numberBathroom"
            />
          </div>
        </div>
        <div className="notes-property-group">
          <label htmlFor="notes">Notes</label>
          <textarea name="" id="notes" rows="5"></textarea>
        </div>

        <div className="title-financial-add-property">
          <div className="btn-save-group">
            <button
              className="add-property-save-btn"
              // onClick={handleClickAdd}
              type="submit"
            >
              Save
            </button>
            <button
              className="add-property-save-btn"
              onClick={props.handleShowPropertyForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default PropertyDetails;
