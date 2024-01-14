import React, { Component } from "react";
class EditTask extends Component {
  //   onClose = (e) => {
  //     this.props.show = false;
  //   };

  state = {
    taskName: "",
    taskType: 0,
    property: 0,
    dueDate: "",
    priority: 0,
    statusTask: 0,
    notes: "",
  };
  handleTaskName = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };
  handleType = (e) => {
    this.setState({
      taskType: e.target.value,
    });
  };
  handleProperty = (e) => {
    this.setState({
      property: e.target.value,
    });
  };
  handleDate = (e) => {
    this.setState({
      dueDate: e.target.value,
    });
  };
  handlePriority = (e) => {
    this.setState({
      priority: e.target.value,
    });
  };
  handleStatus = (e) => {
    this.setState({
      statusTask: e.target.value,
    });
  };

  handleNotes = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };
  // missingMessage = () => {
  //   let missingMessage = "";

  //   if (this.state.taskName === "") {
  //     return (missingMessage += "Missing Task name");
  //   }
  //   if (this.state.taskType === "") {
  //     return (missingMessage += "Missing Task type");
  //   }
  // };
  handleClickEdit = (e) => {
    this.setState({
    state: this.state.taskName 
    })
    
  }
  handleClickAdd = (e) => {
    e.preventDefault();

    const {
      taskName,
      taskType,
      property,
      dueDate,
      statusTask,
      priority,
      notes,
    } = this.state;
    
   
    if (taskName.length > 0) {
      const add = this.props.add(
        taskName,
        taskType,
        property,
        dueDate,
        statusTask,
        priority,
        notes
      )
      
      if (add) {
        this.setState({
          taskName: "",
          taskType: 0,
          property: 0,
          dueDate: "",
          priority: 0,
          statusTask: 0,
          notes: "",
        });
      }
    }
  

    this.props.onClose();
  };
  handleCancelAdd = () => {
    this.setState({
      taskName: "",
      taskType: 0,
      property: 0,
      dueDate: "",
      priority: 0,
      statusTask: 0,
      notes: "",
    });
    this.props.onClose();
  };
  render() {
    if (!this.props.showEdit) {
      return null;
    }
    return (
      <>
        {/* <button
          onClose={(e) => {
            this.onClose(e);
          }}
        >
          Close
        </button> */}

        <section className="modal-wrap active">
          <div className="modal-add-task">
            <div className="modal-top">Edit Task</div>
            <div className="modal-middle">
              <form className="form-save-task" id="edit-task" action="">
                <div className="missing-message show ">
                  {/* <div className={classNameMissing}> */}
                  <i className="fa fa-triangle-exclamation"></i>
                  <p className="missing-message-text">{this.missingMessage}</p>
                </div>
                <div className="form-save-task__group">
                  <div className="labels-group">
                    <label
                      className="form-save-task__label"
                      htmlFor="task-name"
                    >
                      Task name
                    </label>
                    <label className="form-save-task__label" htmlFor="type">
                      Task type
                    </label>
                    <label className="form-save-task__label" htmlFor="property">
                      Property
                    </label>
                    <label className="form-save-task__label" htmlFor="dueDate">
                      Due Date
                    </label>
                    <label className="form-save-task__label" htmlFor="priority">
                      Priority
                    </label>
                    <label
                      className="form-save-task__label"
                      htmlFor="statusTask"
                    >
                      Status
                    </label>
                  </div>
                  <div className="inputs-group">
                    <input
                      className="form-save-task__input"
                      type="text"
                      id="task-name"
                      value={this.state.taskName}
                      onChange={this.handleTaskName}
                    />

                    <select
                      value={this.state.taskType}
                      onChange={this.handleType}
                      // defaultValue={0}
                      className="form-save-task__input"
                      id="type"
                    >
                      <option value="0" selected disabled>
                        - Select -
                      </option>
                      <option value="Property Maintance">
                        Property Maintance
                      </option>
                      <option value="Property Viewing">Property Viewing</option>
                      <option value="Property Task">Property Task</option>
                      <option value="Tenant Task">Tenant Task</option>
                      <option value="Garden">Garden</option>
                      <option value="Other">Other</option>
                    </select>

                    <select
                      value={this.state.property}
                      // defaultValue={0}
                      onChange={this.handleProperty}
                      className="form-save-task__input"
                      id="property"
                    >
                      <option value="0" selected disabled>
                        - Select -
                      </option>
                      <option value="25 High Street">25 High Street</option>
                      <option value="1A Grant Terrace">1A Grant Terrace</option>
                      <option value="8b/2 Morgan Street">
                        8b/2 Morgan Street
                      </option>
                      <option value="62 Duncan Place">62 Duncan Place</option>
                    </select>

                    <input
                      className="form-save-task__input"
                      type="date"
                      id="dueDate"
                      value={this.state.dueDate}
                      onChange={this.handleDate}
                    />

                    <select
                      value={this.state.priority}
                      // defaultValue={0}
                      onChange={this.handlePriority}
                      className="form-save-task__input"
                      id="priority"
                    >
                      <option value="0" selected disabled>
                        - Select -
                      </option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>

                    <select
                      value={this.state.statusTask}
                      // defaultValue={0}
                      onChange={this.handleStatus}
                      className="form-save-task__input"
                      id="statusTask"
                    >
                      <option value="0" selected disabled>
                        - Select -
                      </option>
                      <option value="In progress">In Progress</option>
                      <option value="Waiting">Waiting</option>
                      <option value="Completed">Completed</option>
                      {/* value={this.state.status}
                    onChange={this.handleStatus} */}
                    </select>
                  </div>
                </div>
                <div className="notes-group">
                  <label className="form-save-task__label" htmlFor="notes">
                    Notes
                  </label>
                  <textarea
                    className="form-save-task__input notes"
                    rows="3"
                    id="notes"
                    value={this.state.notes}
                    onChange={this.handleNotes}
                  ></textarea>
                </div>

                <div className="form-btns-group">
                  <input
                    type="button"
                    className="form-save-btn"
                    value="Cancel"
                    onClick={this.handleCancelAdd}
                  />

                  <button
                    className="form-save-btn"
                    type="submit"
                    onClick={this.handleClickAdd}
                  >
                    Save{" "}
                  </button>
                  <button
                    className="form-save-btn"
                    type="submit"
                    onClick={this.handleClickEdit}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-bottom"></div>
            {/* <span className="hide">X</span> */}
          </div>
        </section>
      </>
    );
  }
}

export default EditTask;
