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

  clearTask = () => { this.setState({ taskList: initialTaskList }) }
  
  toggle = (id) => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }else {return item}
      })
    })
    //console.log(this.state.taskList)
  }

  removeFinished = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => item.completed === false? item:null )
    })
  }

  render() {
    return (
      <div>
        <h2>The Minimalism Todo App</h2>
        <TodoList
          taskList={this.state.taskList}
          toggle={this.toggle}
          clearTask={this.clearTask}
          removeFinished={this.removeFinished}
        />
        <TodoForm submit={this.submit} />
      </div>
    )
  }
}

export default App;
