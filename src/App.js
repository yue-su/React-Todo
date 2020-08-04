import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Searchbar from './components/Searchbar'
import { v4 as uuid } from 'uuid';
import Typography from "@material-ui/core/Typography"
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: #ced4da;

  header, footer {
    text-align: center;
    padding: 20px;
    background-color: #e9ecef;
  }

  main {
    display: grid;
    place-items: center;
    .main-card {
      background-color: #f8f9fa;
      padding: 40px;
      border-radius:50px;
      min-height: 450px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
    }
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

    this.saveList()
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

  saveList = () => {
    window.localStorage.setItem('tasks', JSON.stringify(this.state.taskList))
  }

  loadList = () => {
    this.setState({
      taskList: JSON.parse(window.localStorage.getItem('tasks'))
    })
  }

  search = key => {
    this.saveList()
    const taskfilterd = this.state.taskList.filter(item => 
      item.taskName.includes(key) ? item : null)
    this.setState({
      taskList: taskfilterd
    })
  }

  cancel = () => {
    this.loadList()
  }

  render() {
    return (
      <StyledApp>
        <header>
          <Typography variant="h3">The Minimalism Todo</Typography>
        </header>
        <main>
          <div className='main-card'>
            <Searchbar search={this.search} cancel={this.cancel} />
            <TodoList
              taskList={this.state.taskList}
              toggle={this.toggle}
              clearTask={this.clearTask}
              removeFinished={this.removeFinished}
              saveList={this.saveList}
              loadList={this.loadList}
            />
            <TodoForm submit={this.submit} />
          </div>
        </main>
        <footer>
          <Typography variant="h6">Made by Yue</Typography>
        </footer>
      </StyledApp>
    )
  }
}

export default App;
