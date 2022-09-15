import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";

export default class App extends Component {
  // State objects and dynamic output to screen
  constructor(props) {
    // Allows for calling of constructor of its parent class
    // With only super(), you cannot call the props from this class
    // With super(props), allows us to console log the this.props with a value other than undefined 
    super(props);
    console.log(this.props);

    // Similar to useState
    this.state = {
      userName: "Xander",
      // Dummy data for now
      todoItems: [
        {action: 'Buy Milk', done: false},
        {action: 'Dentist at 5pm', done: false},
        {action: 'Brush Teeth', done: false},
      ],
      newTodo: "",
    };
  }
  
  changeStateData = () => {
    // if the userName's state value is "Name1", set it to "Name2", else if not "Name1", Change state of userName to "Name1"
    this.setState({userName: this.state.userName === 'Name1' ? 'Name2' : 'Name1'});
  }


  toggleCompletion = (todo) => {
        // There should be no duplicate items, so using .find() should work.
   // let itemToChange = this.state.todoItems.find(itemComp => itemComp.action === item.action);
   // let filteredTodoItems = this.state.todoItems.filter(newTodos => newTodos !== itemToChange);
   // this.setState({todoItems: [...filteredTodoItems, {action: item.action, done: !item.done}]})
   
    // This is another way to do the logic, map and if the item we pass in is equal to the currently mapped item, 
    // change its done state to toggle effect using ! operator, else just return the item.
    // Mutation of map based on objects versus values(mutation issues shown via Dad)
   this.setState({
    todoItems: this.state.todoItems.map((item) => 
      item.action === todo.action ? {...item, done: !item.done } : item)
   })
  }

  
  updateInputVal = (e) => {
    //console.log(e.target.value);
    this.setState({newTodo: e.target.value});
  }

  newTodo = () => {
    this.setState({todoItems: [...this.state.todoItems, {action: this.state.newTodo, done: false}]});
    //this.setState({newState: ""})
  }
  todoRows  = () => {
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleCompletion}/>
    ))
  }

  // JSX goes into the render()
  render = () => (
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName}/>
        <div className="col-12">
          <input className="form-control" value={this.state.newTodo} onChange={this.updateInputVal}/>
          <button className="btn btn-primary" onClick={this.newTodo}>
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
             </tr>
            </thead>
            <tbody>
              {this.todoRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}