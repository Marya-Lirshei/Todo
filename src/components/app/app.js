import "./app.css";

import AppHeader from "../app-header/app-header";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

// console.log("hee");
const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  // App
  //
  // <AppHeader />
  // <TaskList arr={arr} />
  // <Footer />

  // TaskList
  // <TaskItem label={label} important={important}/>
  // <TaskItem label={label} important={important}/>
  // <TaskItem label={label} important={important}/>

  /* export default TaskItem({label, important}){
       <li>
            <div>
              <input type="checkbox"></input>
              <label>
                <span>{LABEL}</span>
                <span>create 5 minutes ago</span>
              </label>
              <button>Удалить</button>
              <button>Выделить</button>
            </div>
            <input type="text" className="edit"></input>
          </li>
  } */

  return (
    <section className="todo-app">
      <AppHeader />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
