import React from "react";
import ToDoList from "./ToDoList";
import Search from "./Search";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [],
    taskStatus: ""
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  toggleComplete = id => {
    console.log("Hi, I am here ...");
    let todo = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({
      todos: todo
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <Search />
        <ToDoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
