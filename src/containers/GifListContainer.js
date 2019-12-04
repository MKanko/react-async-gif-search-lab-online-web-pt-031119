import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.apiRequest()
    }

    apiRequest = (searchFor = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchFor}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    gifs: json.data.map(gif => gif.images.original.url).slice(0, 3)  
                })
            })
    }

    render() {
        return (
            <div>
                < GifSearch apiRequest={this.apiRequest} /><br/> 
                < GifList gifs={this.state.gifs} />             
            </div>
        )
    }

    
}

export default GifListContainer 