import React from "react";
import Task from "../tasks/Task";
import Notes from "../tasks/Notes";
const TaskList = (props) => {
  const tasks = props.tasks.map((task, index) => (
    <Task
      key={index}
      dataId={index}
      task={task}
      deleteTask={props.deleteTask}
      clickShowEdit = {props.clickShowEdit}
      showEdit ={props.showEdit}
      editTask={props.editTask}
      notes= {props.notes}
      showNotes ={props.showNotes}
      search={props.search}
    />
    
  ));
  // taskName={task.taskName}
  // taskType={task.taskType} property={task.property} dueDate={task.dueDate} priority={task.priority} statusTask={task.statusTask} deleteTask = {props.deleteTask}/>)

    

  return (
    <>
      {/* <button className="tasks-add-btn">Add Task</button> */}
      <table className="tasks-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Task name</th>
            <th>Task type</th>
            <th>Property</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tasks}</tbody>
        <tfoot className="tfoot-table-tasks">
          <tr>
            <th colSpan="8" className="tfoot-col-tasks"></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TaskList;
