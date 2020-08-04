import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import styled from 'styled-components'



const StyledForm = styled.div`

text-align:center;

    margin-top: 20px;

    .todo--form{
      height: 120px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-between;

      .btn{
        width: 120px;
      }
    }
`

class TodoForm extends React.Component {

    constructor() {
        super()

        this.state = {
            taskName : ''
        }
    }

  inputHandler = event => {
      event.preventDefault()
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
        <StyledForm>
          <form className="todo--form" onSubmit={this.submitHandler}>
            <label>
              
              <TextField
                variant="outlined"
                type="text"
                name="taskName"
                placeholder="Type in a new task"
                value={this.state.taskName}
                onChange={this.inputHandler}
              />
            </label>
            <Button className='btn' onClick={this.submitHandler} variant="contained">add</Button>
          </form>
        </StyledForm>
      )
  }
}

export default TodoForm
