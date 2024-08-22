import Task from "../task/task";
import "./task-list.css";

function TaskList({ todos, onDeleted, onToggleDone, addItem }) {
  const elem = todos.map((item) => (
    <Task
      key={item.id}
      label={item.label}
      done={item.done}
      edit={item.edit}
      id={item.id}
      date={item.date}
      // {...item}
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
