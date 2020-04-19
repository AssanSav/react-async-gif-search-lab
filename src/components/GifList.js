import React, { Component } from "react"

export default class GifList extends Component {

    renderGifList() {
        return this.props.gifs.map((image, index) => <li key={index}><img src={image} alt={image} /></li>  )
    }

    render() {
        return (
            <div>
            	<ul>
                	{this.renderGifList()}
          		</ul>
            </div>
        )
    }
}