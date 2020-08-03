import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

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
      return (
        <div>
          <form>
            <label>
              <Typography variant="h5">Create New Task:</Typography>
                      <TextField
                          required
                variant="outlined"
                type="text"
                name="taskName"
                value={this.state.taskName}
                onChange={this.inputHandler}
              />
            </label>
            <Button onClick={this.submitHandler} variant="contained">Submit</Button>
          </form>
        </div>
      )
  }
}

export default TodoForm
