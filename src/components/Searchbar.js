import React from 'react';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Searchbar extends React.Component{

    constructor() {
        super()

        this.state = {
            input: ''
        }
    }

    searchHandler = event => {
        this.setState({
            input: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.search(this.state.input)
    }

    cancelHandler = event => {
        event.preventDefault()
        this.props.cancel()
        this.setState({
            input: ''
        })
    }

    render() {
        return (
          <div>
            <form>
              <label>
                        <TextField
                            value={this.state.input}
                            onChange={this.searchHandler}></TextField>
                    </label>
                    <ButtonGroup variant='contained' size='small'>
                    <Button onClick={this.submitHandler}>Search</Button>
                        <Button onClick={this.cancelHandler}>Cancel</Button>
                    </ButtonGroup>
            </form>
          </div>
        )
    }
}

export default Searchbar