import "../../sass/tasks.scss";
import React from "react";
const Task = (props) => {
  const { dueDate, priority } = props.task;
  // if(priority === 'Low'){
  //     return medium
  // }
  const checkClassPriority = () => {
    let className = "";
    if (priority === "Low") {
      return (className += "priority-low");
    }
    if (priority === "Medium") {
      return (className += "priority-medium");
    }
    if (priority === "High") {
      return (className += "priority-high");
    }
  };
  const checkClassDate = () => {
    let className = "";
    if (new Date(dueDate).valueOf() < new Date().valueOf()) {
      return (className += "overdate");
    } else {
      return (className += "overdate-ok");
    }
  };

  return (
    <>
      <tr data-id={props.dataId}>
        <td>{props.dataId + 1}</td>
        <td>
          {props.task.taskName}
          <i
            className="fa-regular fa-message"
            id="show-notes"
              onMouseDown={props.notes}
            onClick={e => {
              props.showNotes()
              // this.showNotes();
         }}
          ></i>
        </td>
        <td>{props.task.taskType}</td>
        <td>{props.task.property}</td>
        <td>
          <span className={checkClassDate()}>{props.task.dueDate}</span>
        </td>
        <td>
          <span className={checkClassPriority()}>{props.task.priority}</span>
        </td>
        <td>{props.task.statusTask}</td>

        <td>
          {/* <td>{props.task.notes}</td> */}
          <i
            className="fa-solid fa-pen-to-square"
            onClick={e => {
              props.showEdit()
              // this.showNotes();
         }}
          ></i>
          {/* onClick={()=>props.deleteTask(props.task.id)} */}
          <i className="fa-solid fa-trash" onClick={props.deleteTask}></i>
        </td>
      </tr>
    </>
  );
};

export default Task;
