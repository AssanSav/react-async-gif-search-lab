import React, { Component } from "react"

export default class Giflist extends Component {
    renderGifLists() {
        return this.props.gifts.map(image => <ul><li><img src={image} alt={image}></img></li></ul>)
    }
    
    render() {
        return (
            <div> 
                {this.renderGifLists()}
            </div>
        )
    }
}