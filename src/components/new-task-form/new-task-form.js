import React, { Component } from "react";
import "./new-task-form.css";

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addItem } = this.props;
    const { label } = this.state;
    addItem(label);
    this.setState({
      label: "",
    });
  };

  onLableChange = (event) => {
    const { value } = event.target;
    this.setState({
      label: value,
    });
  };

  render() {
    const { label } = this.state;

    return (
      <header className="header">
        <form onSubmit={this.onSubmit}>
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLableChange}
            value={label}
          />
        </form>
      </header>
    );
  }
}
