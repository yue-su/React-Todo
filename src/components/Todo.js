import React from 'react';

class Todo extends React.Component{
    render() {
        return (
          <label>
            <input
              onClick={() => this.props.toggle(this.props.item.id)}
              type="checkbox"
            />
            {this.props.item.taskName}
          </label>
        )
    }
}

export default Todo