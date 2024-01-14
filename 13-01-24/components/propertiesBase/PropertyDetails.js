const PropertyDetails = (props) => {
  if (props.showPropertyDetails) {
    return null;
  }

 
  const noMinusNumber = (value) => {
    const number = Number(value);
    return number >= 0;
  };
// console.log(props.watch('street'))
  return (
    <>
      
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

              {...props.register("street", {
                required: true,
                onChange: props.handleStreet,
                minLength: 3,
                // maxLength: 5,
              })}
              type="text"
              id="street"
              name="street"
              value={props.street}
              // onChange={handleStreet}
            />
            {/* {errors.street && (
              <span className="form-error">Street field is required</span>
            )} */}
            {props.errors.street?.type === "required" && (
              <span className="form-error">Street field is required</span>
            )}
            {props.errors.street?.type === "minLength" && (
              <span className="form-error">At least 3 chars</span>
            )}
            {props.errors.userName?.type === "maxLength" && (
              <span className="form-error">At most 5 chars</span>
            )}
            <input
              {...props.register("city", { required: true, onChange: props.handleCity })}
              className="input-address"
              type="text"
              id="city"
              name="city"
              value={props.city}
              // onChange={handleCity}
            />
            {props.errors.city && (
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
            <input
              className="input-address"
              type="number"
              id="numberRooms"
              name="numberRooms"
              {...props.register("numberRooms", {
                validate: noMinusNumber,
              })}
            />
            {props.errors.numberRooms && (
              <span className="form-error">Value must be greather than 0</span>
            )}
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
    </>
  );
};
export default PropertyDetails;
