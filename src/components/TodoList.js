// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.taskList.map(item => {
                        return (
                          <div key={item.id}>
                            <h3>{item.taskName}</h3>
                          </div>
                        )
                    })
               } 
            </div>
        )
    }

}

export default TodoList