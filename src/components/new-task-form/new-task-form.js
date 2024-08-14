import React, { Component } from "react";
import "./new-task-form.css"


export default class NewTaskForm extends Component{

  constructor(props) {
    super(props);

    this.state = {
      label: "",
    };
  }

  onLableChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    // this.props.onItemAdd(this.state.label);
    const { onItemAdd } = this.props;
    const { label } = this.state;
    onItemAdd(label);
    this.setState({
      label: "",
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
