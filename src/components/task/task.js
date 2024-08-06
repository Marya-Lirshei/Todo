import "./task.css";

const Task = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">
            {/* Completed task */}
            {label}
          </span>
          {/* <span className="created">created 17 seconds ago</span> */}
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
