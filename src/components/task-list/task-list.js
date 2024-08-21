import Task from "../task/task.js";
import "./task-list.css";

function TaskList({ todos, onDeleted, onToggleDone, addItem }) {
  const elem = todos.map((item) => (
    <Task
      key={item.id}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...item}
      onDeleted={() => {
        onDeleted(item.id);
      }}
      onToggleDone={() => {
        onToggleDone(item.id);
      }}
      addItem={addItem}
    />
  ));
  return <ul className="todo-list">{elem}</ul>;
}

export default TaskList;
