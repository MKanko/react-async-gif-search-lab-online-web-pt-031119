import React, { Component } from 'react'

class GifList extends Component {

    render() {

        const renderGifs = this.props.gifs.map(gif => <li><img src={gif} ></img></li>)
            
        return (
            <div>
                <ul>
                    {renderGifs}
                </ul>
            </div>
        )
    }
}

export default GifList

