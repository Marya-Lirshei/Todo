import Task from "../task/task.js";
import "./task-list.css";

const TaskList = ({ todos, onDeleted, onToggle }) => {
  //   console.log("todos: ", todos);
  return (
    <ul className="todo-list">
      {todos.map((el) => {
        const { id, ...props } = el;
        return <Task key={id} {...props} 
        onDeleted={() => onDeleted(id)}
        onToggle={() => onToggle(id)}/>;
      })}
    </ul>
    //   <ul className="todo-list">
    //   {todos.map(({ id, ...props }) => (
    //     <Task key={id} {...props} onDeleted={() => onDeleted(id)} />
    //   ))}
    // </ul>
  );
};

export default TaskList;
