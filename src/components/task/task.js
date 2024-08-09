import React,{Component} from 'react';
import "./task.css";

export default class Task extends Component{

  state={
    done: false,
    // important: false
  }
  
  onLabelClick=()=>{
    this.setState((state)=>{
      return{
        done: !state.done
      }
    })
    console.log(this.props.label);
  }

  
  render(){
    const {label, onDeleted, onToggle }=this.props
    const {done} =this.state

    // let nameClass = "";
    // if (done) {
    //   nameClass += "completed";
    // }


    return (
      // 
      <li className={done ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox"
          // checked={done}
          onClick={this.onLabelClick}
          onChange={onToggle}>

          </input>
          <label>
            <span className="description"
            > {label}</span>
            {/* <span className="created">created 17 seconds ago</span> */}
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
          onClick={onDeleted}>

          </button>
        </div>
      </li>
    );
 

  }


}




// const Task = ({ label, important = false }) => {
//   const style = {
//     color: important ? "steelblue" : "black",
//     fontWeight: important ? "bold" : "normal",
//   };

// };


