import React, {Component } from 'react'

class GifSearch extends Component {

    state = {
        userInput: ''  
    }

    handleInputChange = (event) => {
        this.setState({
            userInput: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.apiRequest(this.state.userInput)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input 
                        id='userInput' 
                        name='userInput' 
                        type='text' 
                        value={this.state.userInput} 
                        onChange={event => this.handleInputChange(event)} />
                    <button type='submit'>Find Gifs</button>
                </form> 
            </div>
        )
    }
}

export default GifSearch