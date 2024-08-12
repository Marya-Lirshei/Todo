import React, { Component } from "react";
import TaskFilter from "../task-filter/task-filter";
import "./footer.css";

export default class Footer extends Component {

  render() {
    const {filter, onFilterChange, todoCount, onClick, onToggle, /* completedTask, activeTask */ } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TaskFilter 
        filter={filter}
        onFilterChange={onFilterChange}
        // activeTask={activeTask}
        // completedTask={completedTask}
        onToggle={onToggle}/>
        <button className="clear-completed"
        onClick={onClick}>Clear completed</button>
      </footer>
    );
  }
}
