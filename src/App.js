import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { v4 as uuid } from 'uuid';

const initialTaskList = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()

    this.state = {
      taskList: initialTaskList,
    }
  }

  submit = (name) => {
    const newTask = {
      taskName: name,
      id: uuid(),
      completed: false,
    }

    this.setState({
      taskList: [...this.state.taskList, newTask],
    })

    //console.log(this.state.taskList)
  }

  clearTask = () => {this.setState({taskList: initialTaskList})}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskList={this.state.taskList} />
        <TodoForm submit={this.submit} />
        <button onClick={this.clearTask}>Clear the Task</button>
      </div>
    )
  }
}

export default App;
