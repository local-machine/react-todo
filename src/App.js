import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dishes",
        completed: false,
      },
      {
        id: 3,
        title: "Vacuum",
        completed: false,
      },
      {
        id: 4,
        title: "Call the doctor",
        completed: true,
      },
      {
        id: 5,
        title: "Participate in stand-up",
        completed: false,
      },
    ],
  };

  // Toggle task complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Filter out deleted task
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
