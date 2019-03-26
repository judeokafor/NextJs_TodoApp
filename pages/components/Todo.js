import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import PropTypes from "prop-types";

export class Todo extends Component {
  state = {
    todos: this.props.props.todos,
    // todos: [
    //   {
    //     id: uuid.v4(),
    //     title: "Learn React hooks",
    //     completed: false,
    //     created: Date.now()
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Learn Progressive Web App",
    //     completed: false,
    //     created: Date.now()
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Learn React Router",
    //     completed: true,
    //     created: Date.now()
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Read documentation of next js",
    //     completed: true,
    //     created: Date.now()
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Read documentation of next js",
    //     completed: true,
    //     created: Date.now()
    //   }
    // ]
  }

  // Toogle todo
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  // delete todo from Ui
  delTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    // async () => {
    //   const res = await fetch("http://localhost:3500/todo", newTodo, {
    //     method : 'POST',
    //   });
    //   const data = await res.json();
    
    //   // console.log('my todos', data);
    //   return {
    //     todos: data
    //   };
    // };
  };
  render() {
    // console.log('inside todo component', this.props.props.todos);
    return [
      <AddTodo addTodo={this.addTodo} />,
      this.state.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      ))
    ];
  }
}
// Prop-Types
Todo.propTypes = {
  todos: PropTypes.object.isRequired
};
export default Todo;
