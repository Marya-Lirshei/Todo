import React, { Component } from "react";
import "./new-task-form.css"


export default class NewTaskForm extends Component{

  state={
    newTask: ""
  }

  handleInputChange =(event)=>{
      this.setState({ newTask: event.target.value})
  }

  handleKeyDown =(event)=>{
    if(event.key==="Enter"){
      this.props.onAddTask(this.state.newTask)
      this.setState({newTask: ""})
    }
  }

  render(){
    return (
        <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.newTask}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        ></input>
      </header>
    )
  }
}
