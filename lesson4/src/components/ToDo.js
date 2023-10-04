import React, { Component } from "react";
import "../App.css";
import Input from "./Input";
import Button from "./Button";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTask = () => {
    if (this.state.inputValue !== "") {
      const newTask = { text: this.state.inputValue, done: false };
      this.setState({
        tasks: [...this.state.tasks, newTask],
        inputValue: "",
      });
    }
  };

  handleToggleDone = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    this.setState({ tasks: updatedTasks });
  };

  handleDeleteTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };
  render() {
    return (
      <div>
        <div className="todo__wrapper">
          <h1 className="heading">To Do List</h1>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />

          <Button
            type="primary"
            text="Add Item"
            handleClick={this.handleAddTask}
          />
          <div className="task__item">
            {this.state.tasks.map((task, index) => (
              <div key={index} className={task.done ? "task done" : "task"}>
                <span
                  className={
                    task.done ? "task__content__finished" : "task__content"
                  }
                >
                  {task.text}
                </span>
                <div className="del__done__btns">
                  <Button
                    type="secondary"
                    text="Done"
                    handleClick={() => this.handleToggleDone(index)}
                  />

                  <Button
                    type="thirthary"
                    text="Delete"
                    handleClick={() => this.handleDeleteTask(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
