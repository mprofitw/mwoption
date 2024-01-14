import React, { Component, useState,useEffect } from "react";
import { useForm } from "react-hook-form";

// class AddTask extends Component {
//   onClose = (e) => {
//     this.props.show = false;
//   };

const AddTask = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("0");
  const [property, setProperty] = useState("0");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("0");
  const [statusTask, setStatusTask] = useState("0");
  const [notes, setNotes] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const handleType = (e) => {
    setTaskType(e.target.value);
  };
  const handleProperty = (e) => {
    setProperty(e.target.value);
  };
  const handleDate = (e) => {
    setDueDate(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e.target.value);
  };
  const handleStatus = (e) => {
    setStatusTask(e.target.value);
  };

  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  //   handleClickEdit = (e) => {
  //     this.setState({
  //       state: this.state.taskName,
  //     });
  //   };
  const handleClickAdd = (e) => {
    // e.preventDefault();

    if (taskName.length > 0) {
      const add = props.add(
        taskName,
        taskType,
        property,
        dueDate,
        statusTask,
        priority,
        notes
      );

      if (add) {
        setTaskName("");
        setTaskType("0");
        setProperty("0");
        setDueDate('')
        setPriority('0')
        setStatusTask('0')
        setNotes('')
      }
    }

    props.onClose();
  };
  const handleCancelAdd = () => {
    setTaskName("");
        setTaskType("0");
        setProperty("0");
        setDueDate('')
        setPriority('0')
        setStatusTask('0')
        setNotes('')
    props.onClose();
  };
  //   clickEdit = () => {
  //     console.log("Mount" + this.props.newTaskToEdit.taskName);
  //     this.setState({
  //       taskName: this.props.newTaskToEdit.taskName,
  //     });
  //   };
  //   componentDidMount() {
  //     console.log("Mount" + this.props.newTaskToEdit.taskName);
  //     this.setState({
  //       taskName: this.props.newTaskToEdit.taskName,
  //     });
  //   }
  useEffect(() => {

    setTaskName(props.newTaskToEdit.taskName)
    setTaskType(props.newTaskToEdit.taskType)
    setProperty(props.newTaskToEdit.property);
    setDueDate(props.newTaskToEdit.dueDate);
    setPriority(props.newTaskToEdit.priority);
    setStatusTask(props.newTaskToEdit.statusTask)
    setNotes(props.newTaskToEdit.notes)
   
   },[])
  if (!props.show) {
    return null;
  }
  return (
    <>
      <section className="modal-wrap active">
        <div className="modal-add-task">
          <div className="modal-top">Add Task</div>
          <div className="modal-middle">
            <form
              className="form-save-task"
              id="edit-task"
              onSubmit={handleSubmit(handleClickAdd)}
            >
              <div className="missing-message show ">
                {/* <div className={classNameMissing}> */}
                <i className="fa fa-triangle-exclamation"></i>

                {/* <p className="missing-message-text">error</p> */}
                {errors.taskName?.type === "required" && (
                  <p className="missing-message-text">Task name is required</p>
                )} 
                    {errors.taskType?.type === "minLength" && (
                    <p className="missing-message-text">Task type is required</p>
                  )}
              </div>
              <div className="form-save-task__group">
                <div className="labels-group">
                  <label className="form-save-task__label" htmlFor="task-name">
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
                  <label className="form-save-task__label" htmlFor="statusTask">
                    Status
                  </label>
                </div>
                <div className="inputs-group">
                  <input
                    className="form-save-task__input"
                    type="text"
                    id="task-name"
                    name="taskName"
                    value={taskName}
                    {...register("taskName", {
                      required: true,
                      onChange: handleTaskName,
                    })}
                  />
                  {/* {errors.taskName?.type === "required" && (
                    <span className="form-error">
                      Task name field is required.
                    </span>
                  )} */}
                  <select
                    name="taskType"
                    value={taskType}
                    // onChange={handleType}
                    // defaultValue={0}
                    {...register("taskType", {
                      required: true,
                      minLength: 2,
                      onChange: handleType,
                      // onChange: props.onPurchasePriceChange,
                    })}
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
                  {errors.taskType?.type === "minLength" && (
                    <span className="form-error">
                      Task name field is required.
                    </span>
                  )}
                  <select
                    value={property}
                    // defaultValue={0}
                    // onChange={handleProperty}
                    className="form-save-task__input"
                    id="property"
                    name="property"
                    {...register("property", {
                        required: true,
                        onChange: handleProperty,
                      })}
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
                  {errors.property?.type === "required" && (
                    <span className="form-error">
                      Property field is required.
                    </span>
                  )}
                  <input
                    className="form-save-task__input"
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={handleDate}
                  />

                  <select
                    value={priority}
                    // defaultValue={0}
                    onChange={handlePriority}
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
                    value={statusTask}
                    // defaultValue={0}
                    onChange={handleStatus}
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
                  value={notes}
                  onChange={handleNotes}
                ></textarea>
              </div>

              <div className="form-btns-group">
                <input
                  type="button"
                  className="form-save-btn"
                  value="Cancel"
                  onClick={handleCancelAdd}
                />

                <button
                  className="form-save-btn"
                  type="submit"
                  //   onClick={handleClickAdd}
                >
                  Save{" "}
                </button>
                {/* <button className="form-save-btn" onClick={clickEdit}>
                  edit{" "}
                </button> */}
                {/* <button
                  className="form-save-btn"
                  type="submit"
                  onClick={this.handleClickEdit}
                >
                  Edit
                </button> */}
              </div>
            </form>
          </div>
          <div className="modal-bottom"></div>
          {/* <span className="hide">X</span> */}
        </div>
      </section>
    </>
  );
};

export default AddTask;
