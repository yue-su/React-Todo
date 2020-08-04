import React from 'react';
import Checkbox from "@material-ui/core/Checkbox"
import ListItem from '@material-ui/core/ListItem';

class Todo extends React.Component{
    render() {
        return (
          <ListItem>
            <Checkbox
              onClick={() => this.props.toggle(this.props.item.id)}
              type="checkbox"
            />
            {this.props.item.taskName}
          </ListItem>
        )
    }
}

export default Todo