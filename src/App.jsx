import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: "01", name: "吃饭", done: true },
      { id: "02", name: "睡觉", done: true },
      { id: "03", name: "打代码", done: false },
    ],
  };

  //addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    //获取原todos
    const { todos } = this.state;
    //追加一个todo
    const newTodos = [todoObj, ...todos];
    //更新状态
    this.setState({
      todos: newTodos,
    });
  };

  //updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  //deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    //获取原来的todos
    const { todos } = this.state;
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  //checkALLTodo用于全选
  checkALLTodo = (done) => {
    //获取原来的todos
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  //clearAllDone用于清除所有已经完成的
  clearAllDone = () => {
    //获取原来的todos
    const { todos } = this.state;
    //过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    //更新状态
    this.setState({todos:newTodos})
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkALLTodo={this.checkALLTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
