import React from 'react';
import Checkbox from "@material-ui/core/Checkbox"
import ListItem from '@material-ui/core/ListItem'
import Typography from "@material-ui/core/Typography"

class Todo extends React.Component{
    render() {
        return (
          <ListItem>
            <Checkbox
              onClick={() => this.props.toggle(this.props.item.id)}
              type="checkbox"
            />
            <Typography>{this.props.item.taskName}</Typography>
          </ListItem>
        )
    }
}

export default Todo