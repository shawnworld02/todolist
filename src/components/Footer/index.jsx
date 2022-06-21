import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  //全选checkAllBox的回调
  handleCheckAll = (event) => {
    this.props.checkALLTodo(event.target.checked);
  };

  //清除所有已完成的回调
  handleClearALLDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //计算已完成的个数
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label className="hasDone-Wrap">
          <input
            className="checkbox"
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
          <span className="hasDone">
            <span>
              已完成{doneCount} / 全部{total}
            </span>
          </span>
        </label>
        <button onClick={this.handleClearALLDone} className="btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
