// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

class TodoList extends React.Component {

    clearHandler = event => {
        event.preventDefault()
        this.props.clearTask()
    }

    removeHandler = event => {
        event.preventDefault()
        this.props.removeFinished()
    }
  
  saveHandler = event => {
    event.preventDefault()
    this.props.saveList()
  }
  
  loadHandler = event => {
    event.preventDefault()
    this.props.loadList()
  }

    render() {
        return (
          <form>
            <Typography variant="h5">Task List:</Typography>
            {this.props.taskList.map((item) => {
              return (
                <Todo item={item} key={item.id} toggle={this.props.toggle} />
              )
            })}
            <Button variant="contained" onClick={this.clearHandler}>
              Clear the Task
            </Button>
            <Button variant="contained" onClick={this.removeHandler}>
              Remove the Finished Task
            </Button>
            <Button variant="contained" onClick={this.saveHandler}>
              Save List
            </Button>
            <Button variant="contained" onClick={this.loadHandler}>
              Load List
            </Button>
          </form>
        )
    }

}

export default TodoList