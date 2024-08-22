import React, { Component } from "react";
import { nanoid } from "nanoid";

import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import "./app.css";
// console.log("hee");

export default class App extends Component {
  static filterTask(items, allActiveDone) {
    switch (allActiveDone) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  static createTodoItem = (label) => ({
    label,
    done: false,
    edit: false,
    id: nanoid(),
    date: new Date(),
  });

  static onToggleProperty(arr, id, propName) {
    return arr.map((el) =>
      el.id === id ? { ...el, [propName]: !el[propName] } : el
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      todoData: [
        App.createTodoItem("Drink Coffee"),
        App.createTodoItem("Make Awesome App"),
        App.createTodoItem("Have a lunch"),
      ],

      filterState: "",
    };
  }

  addItem = (text) => {
    if (text.trim()) {
      const obj = App.createTodoItem(text);
      this.setState(({ todoData }) => {
        const now = [...todoData, obj];
        return {
          todoData: now,
        };
      });
    }
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: App.onToggleProperty(todoData, id, "done"),
    }));
  };

  onToggleEdit = (id) => {
    this.setState(({ todoData }) => ({
      todoData: App.onToggleProperty(todoData, id, "edit"),
    }));
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const now = todoData.filter((el) => el.id !== id);
      return {
        todoData: now,
      };
    });
  };

  onFilterChange = (filterState) => {
    this.setState({ filterState });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const now = todoData.filter((el) => !el.done);
      return {
        todoData: now,
      };
    });
  };

  render() {
    const { todoData, filterState } = this.state;

    const visibleItems = App.filterTask(todoData, filterState);
    const leftItems = todoData.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
            addItem={this.addItem}
          />
          <Footer
            filtered={filterState}
            onFilterChange={this.onFilterChange}
            clearCompleted={this.clearCompleted}
            count={leftItems}
            todos={visibleItems}
          />
        </section>
      </section>
    );
  }
}
