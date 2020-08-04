// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'
import Button from "@material-ui/core/Button"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from "@material-ui/core/Typography"
import List from '@material-ui/core/List';
import styled from 'styled-components'

const StyledList = styled.div`
margin-top: 20px;

`


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
        <StyledList>
          <Typography variant="h5">Task List:</Typography>
          <List>
            {this.props.taskList.map((item) => {
              return (
                <Todo item={item} key={item.id} toggle={this.props.toggle} />
              )
            })}
          </List>
          <ButtonGroup variant="contained">
            <Button  onClick={this.removeHandler}>
              Remove
            </Button>
            <Button onClick={this.clearHandler}>
              Clear
            </Button>
            <Button onClick={this.saveHandler}>
              Save
            </Button>
            <Button onClick={this.loadHandler}>
              Load
            </Button></ButtonGroup>
          </StyledList>
        )
    }

}

export default TodoList