import "./task-filter.css";
const TaskFilter = ({onToggle, activeTask, completedTask }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button
       onClick={activeTask}
        >Active</button>
      </li>
      <li>
        <button
        onClick={completedTask}
        >Completed</button>
      </li>
    </ul>
  );
};

export default TaskFilter;
