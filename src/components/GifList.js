import React, { Component } from "react"

<<<<<<< HEAD
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
=======
export default class Giflist extends Component {
    renderGifLists() {
        return this.props.gifts.map(image => <ul><li><img src={image} alt={image}></img></li></ul>)
    }
    
    render() {
        return (
            <div> 
                {this.renderGifLists()}
>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
            </div>
        )
    }
}