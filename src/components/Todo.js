import React from 'react';
import Checkbox from "@material-ui/core/Checkbox"

class Todo extends React.Component{
    render() {
        return (
          <label>
            <Checkbox
              onClick={() => this.props.toggle(this.props.item.id)}
              type="checkbox"
            />
            {this.props.item.taskName}
          </label>
        )
    }
}

export default Todo