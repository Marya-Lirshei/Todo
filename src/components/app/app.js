import React, { Component } from "react";
import "./app.css";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

// console.log("hee");

export default class App extends Component {

  filter(items, filter) {
    switch (filter) {
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
  
  state = {
    todoData: [
 
    ],
    filter: "",
  };


  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => el.id !== id),
    }));
  };

  addTask = (label) => {
    const newTask = {
      label,
      done: false,
      id: Date.now(),
    };
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newTask],
    }));

    // this.setState(({ todoData }) => {
    //   const updatedTodoData = [...todoData, newTask];
    //   console.log('Добавленная задача:', newTask);
    //   return { todoData: updatedTodoData };
    // });
  };

  toggleTask = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));

    // this.setState(({ todoData }) => {
    //   const updatedTodoData = todoData.map((task) => {
    //     if (task.id === id) {
    //       console.log('Переключение задачи:', task); // Логируем задачу перед переключением
    //       return { ...task, done: !task.done };
    //     }
    //     return task;
    //   });
    //   return { todoData: updatedTodoData };
    // });
  };

  deleteCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => {
        console.log(el);
        return !el.done;
      }),
    }));

    // this.setState(({ todoData }) => {
    //   const filteredTodoData = todoData.filter((el) => {
    //     console.log('Проверка задачи на удаление:', el); // Логируем каждую задачу
    //     return !el.done; // Оставляем только невыполненные задачи
    //   });
    //   console.log('Оставшиеся задачи после удаления:', filteredTodoData); // Логируем оставшиеся задачи
    //   return { todoData: filteredTodoData };
    // });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  // activeTask = () => {
  //   this.setState(({ todoData }) => ({
  //     todoData: todoData.filter((el) => {
  //       console.log(el);
  //       return !el.done;
  //     }),
  //   }));
  // };


  // completedTask = () => {
  //   this.setState(({ todoData }) => ({
  //     todoData: todoData.filter((el) => {
  //       console.log(el);
  //       return el.done;
  //     }),
  //   }));
  // }

  render() {

    const { todoData, filter } = this.state;

    const unCompletedCount = todoData.filter((el) => !el.done).length;
    console.log("Текущ задачи:", this.state.todoData);
    return (
      <section className="todo-app">
        <NewTaskForm onAddTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deleteItem}
            onToggle={this.toggleTask}
          />
          <Footer
            filter={filter}
            todoCount={unCompletedCount}
            onClick={this.deleteCompleted}
            onFilterChange={this.onFilterChange}
            // activeTask={this.activeTask}
            // completedTask = {this.completedTask}
            onToggle={this.toggleTask}
          />
        </section>
      </section>
    );
  }
}
