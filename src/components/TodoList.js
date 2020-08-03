// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

    clearHandler = event => {
        event.preventDefault()
        this.props.clearTask()
    }

    removeHandler = event => {
        event.preventDefault()
        this.props.removeFinished()
    }

    render() {
        return (
          <form>
            {this.props.taskList.map((item) => {
              return (
                <Todo item={item} key={item.id} toggle={this.props.toggle} />
              )
            })}
            <button onClick={this.clearHandler}>Clear the Task</button>
            <button onClick={this.removeHandler}>Remove the Finished Task</button>
          </form>
        )
    }

}

export default TodoList