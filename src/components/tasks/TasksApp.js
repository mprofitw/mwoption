import React, { Component } from "react";
import "../../sass/tasks.scss";
import TaskList from "../tasks/TaskList";
import AddTask from "../tasks/AddTask2";
import EditTask from "../tasks/EditTask";
import Notes from "../tasks/Notes";
import Task from "../tasks/Task";

class TasksApp extends Component {
  // counter = 0;
  state = {
    showModal: false,
    showModalEdit: false,
    showNotes: false,
    searchTaskName: "",
    searchStatus: 0,
    newTaskToEdit: [],
    tasks: [
      {
        id: 0,
        taskName: "Naprawa kranu",
        taskType: "Property Maintance",
        property: "25 High Street",
        dueDate: "2023-09-23",
        priority: "Low",
        statusTask: "Completed",
        notes: "Zawory kupić. Pilne",
        active: true,
      },
      {
        id: 1,
        taskName: "Wymiana bojlera",
        taskType: "Garden",
        property: "8b/2 Morgan Street",
        dueDate: "2024-01-19",
        priority: "High",
        statusTask: "In progress",
        notes: "Dach przecieka. Wilgoć",
        active: true,
      },
      {
        id: 2,
        taskName: "Zburzyć ścianę",
        taskType: "Other",
        property: "8b/2 Morgan Street",
        dueDate: "2023-11-06",
        priority: "Medium",
        statusTask: "Waiting",
        notes: "Plasterboard",
        active: true,
      },
      {
        id: 3,
        taskName: "Koszenie trawy",
        taskType: "Garden",
        property: "62 Duncan Place",
        dueDate: "2023-12-28",
        priority: "High",
        statusTask: "In progress",
        notes: "Trzeba w końcu skosić trawę. Bardzo wysoka. Filip",
        active: false,
      },
      {
        id: 4,
        taskName: "Zburzyć ścianę ",
        taskType: "Other",
        property: "8b/2 Morgan Street",
        dueDate: "2023-10-15",
        priority: "Medium",
        statusTask: "In progress",
        notes: "Plasterboard",
        active: false,
      },
      {
        id: 5,
        taskName: "Wymiana okien ",
        taskType: "Other",
        property: "17 Green Walk",
        dueDate: "2023-10-15",
        priority: "Medium",
        statusTask: "In progress",
        notes: "Plasterboard",
        active: false,
      },
    ],
    searchArr: [],
  };

  handleSearchTaskName = (e) => {
    this.setState({
      searchTaskName: e.target.value,
    });
  };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  showNotes = (e) => {
    this.setState({
      showNotes: !this.state.showNotes,
    });
  };
  showModal = (e) => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  showModalEdit = (e) => {
    this.setState({
      showModalEdit: !this.state.showModalEdit,
    });
    console.log("to jest to");
  };
  // const [eProperty, setEProperty] = useState([]);

  edit = (id,taskName,taskType) => {
    console.log("Znalazlem index do edycji task" + id);
    let tasksEdit = [...this.state.tasks];
       const index = tasksEdit.findIndex((task) => task.id === id);
    this.showModal();
 
    const editTask = {
      taskName: this.state.tasks[index].taskName,
      taskType: this.state.tasks[index].taskType,
      property: this.state.tasks[index].property,
      dueDate: this.state.tasks[index].dueDate,
      priority: this.state.tasks[index].priority,
      statusTask: this.state.tasks[index].statusTask,
      notes: this.state.tasks[index].notes,
      active: this.state.tasks[index].active,
    };
    this.setState({ newTaskToEdit: editTask });

      //  const abc = this.state.tasks.splice(index, 1,editTask);
      //  this.setState({tasks: abc})

  };

  handleShowNotes = (e) => {
    const id = Number(e.target.parentNode.parentNode.dataset.id);
    console.log(id);
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((el, index) => {
      if (index === id) {
        console.log(tasks[id].notes);
        return tasks[id].notes;
      } else return false;
    });
    console.log(tasks);
    return tasks;

    // this.setState({
    //   tasks: tasks,
    // })
  };
  handleSearch = (e) => {
    console.log(e.target.value);
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((el) =>
      el.taskName
        .toLowerCase()
        .includes(this.state.searchTaskName.toLowerCase())
    );

    this.setState({
      searchArr: tasks,
    });

     console.log(this.state.tasks);
  };

  searchStatus = (e) => {
    this.setState({
      searchStatus: e.target.value,
    });
  };
  handleSearchStatus = (e) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((el) => el.statusTask === this.state.searchStatus);
    this.setState({
      searchArr: tasks,
    });
  };
  handleSearchClear = () => {
    let tasks = [...this.state.tasks];
    this.setState({
      tasks: tasks,
    });
  };
  handleDeleteTask = (id) => {
    console.log('ten id to ' + id);
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm("Are you sure you want to delete the selected property?") ===
      false
    ) {
      return;
    }
    // let taskNew = [...this.state.tasks];
    const index = this.state.tasks.findIndex((task) => task.id === id);
    this.state.tasks.splice(index, 1);
    this.setState({tasks: this.state.tasks})
    console.log(this.state.tasks);
  };
  // handleDeleteTask = (e) => {
  //   const id = Number(e.target.parentNode.parentNode.dataset.id);

  //   if (
  //     // eslint-disable-next-line no-restricted-globals
  //     confirm("Are you sure you want to delete the selected task?") === false
  //   ) {
  //     return;
  //   }
  //   const tasks = [...this.state.tasks];
  //   tasks.splice(id, 1);
  //   this.setState({
  //     tasks: tasks,
  //   });
  // };
  addTask = (
    taskName,
    taskType,
    property,
    dueDate,
    statusTask,
    priority,
    notes
  ) => {
    const newTask = {
      // id: this.counter,
      taskName: taskName,
      taskType: taskType,
      property: property,
      dueDate: dueDate,
      priority: priority,
      statusTask: statusTask,
      notes: notes,
    };
    // this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
    // console.log(this.state.tasks);
    return true;
  };

  render() {
    let tasks = [...this.state.tasks];
    // let tasksItems;
    // if (tasks.length === 0) {
    //   return (
    //     <p className="empty-tasks-list">
    //       You don 't currently have any tasks on your list.{" "}
    //     </p>
    //   );
    // }

    return (
      <>
        <h1 className="title-tasks"> Tasks List </h1>{" "}
        <div className="wrapper-tasks">
          <div className="search-section">
            <input
              type="text"
              placeholder="search task name..."
              className="search-task"
              value={this.state.searchTaskName}
              onChange={this.handleSearchTaskName}
              onKeyUp={this.handleSearch}
            />{" "}
            <select
              className="search-status"
              value={this.state.searchStatus}
              onChange={this.searchStatus}
              id="statusTask"
            >
              <option value="0" selected disabled>
                -Select -
              </option>{" "}
              <option value="In progress"> In Progress </option>{" "}
              <option value="Waiting"> Waiting </option>{" "}
              <option value="Completed"> Completed </option>{" "}
            </select>{" "}
            <button
              className="tasks-search-btn"
              onClick={this.handleSearchStatus}
            >
              Apply{" "}
            </button>{" "}
            <button
              className="tasks-search-btn"
              onClick={this.handleSearchClear}
            >
              Clear{" "}
            </button>{" "}
          </div>{" "}
          <button
            className="tasks-add-btn"
            onClick={(e) => {
              this.showModal();
            }}
          >
            Add Task{" "}
          </button>
          <TaskList
            tasks={
              this.state.searchArr.length === 0
                ? this.state.tasks
                : this.state.searchArr
            }
            deleteTask={this.handleDeleteTask}
            edit={this.edit}
            showModal={this.showModal}
            showModalEdit={this.state.showModalEdit}
            notes={this.handleShowNotes}
            showNotes={this.showNotes}
            search={this.handleSearch}
          />
          <button
            className="tasks-add-btn"
            onClick={(e) => {
              this.showModal();
            }}
          >
            Add Task{" "}
          </button>
          <AddTask
            onClose={this.showModal}
            show={this.state.showModal}
            add={this.addTask}
            edit={this.editTask}
            newTaskToEdit={this.state.newTaskToEdit}
          />{" "}
          <EditTask
            onClose={this.showModalEdit}
            clickShowEdit={this.showModalEdit}
            showEdit={this.state.showModalEdit}
          />{" "}
          <Notes
            showNotes={this.state.showNotes}
            notes={this.handleShowNotes}
          />
          {/* <AddTask show={this.state.show}>Message in Modal</AddTask> */}{" "}
        </div>{" "}
      </>
    );
  }
}
export default TasksApp;
