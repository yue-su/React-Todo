import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { v4 as uuid } from 'uuid';
import Typography from "@material-ui/core/Typography"
import styled from 'styled-components'

const StyledApp = styled.div`
margin: 0;
display: grid;
grid-template-rows: auto 1fr auto;
height: 100vh;

header{text-align: center}
footer{text-align:center}

main{
  display: grid;
  place-items:center;

}

`

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
      <StyledApp>
        <header>
          <Typography variant="h3">The Minimalism Todo</Typography>
        </header>
        <main>
          <div>
          <TodoForm submit={this.submit} />
          <TodoList
            taskList={this.state.taskList}
            toggle={this.toggle}
            clearTask={this.clearTask}
            removeFinished={this.removeFinished}
            /></div>
        </main>
        <footer>
          <Typography variant='h6'>Made by Yue</Typography>
        </footer>
      </StyledApp>
    )
  }
}

export default App;
