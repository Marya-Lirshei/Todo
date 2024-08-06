import Task from "../task/task.js";
import "./task-list.css";

const TaskList = ({ todos }) => {
  //   console.log("todos: ", todos);
  return (
    <ul class="todo-list">
      {todos.map((el) => {
        const { id, ...props } = el;
        return <Task {...props} />;
      })}
    </ul>
  );
};

export default TaskList;
