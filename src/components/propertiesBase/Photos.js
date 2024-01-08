const Photos = (props) => {
  return (
    <div className="wrapper-photos">
      <div className="title-financial-add-property">
        <p>Image gallery</p>
      </div>
      <div className="form-photos">
        <p>Choose pictures</p>

        <input type="file" name="" id="" accept="image/jpeg,image/gif" />
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
export default Photos;
