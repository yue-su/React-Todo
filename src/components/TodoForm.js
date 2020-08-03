import React from "react"

class TodoForm extends React.Component {

    constructor() {
        super()

        this.state = {
            taskName : ''
        }
    }

    inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        //console.log(this.state)
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.submit(this.state.taskName)
        this.setState({
            taskName:''
        })
    }

  render() {
      return <div>
          <form onSubmit={this.submitHandler}>
              <label>
                  <h4>Task Name:</h4>
                  <input
                      type="text"
                      name='taskName'
                      value={this.state.taskName}
                      onChange={this.inputHandler}
                  />
              </label>
              <button>Submit</button>
        </form>
    </div>
  }
}

export default TodoForm
