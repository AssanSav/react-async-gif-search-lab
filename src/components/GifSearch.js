import React, { Component } from "react"

<<<<<<< HEAD
export default class GifSearch extends Component {
=======
export default class GifList extends Component {
>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
    constructor() {
        super()
        this.state = {
            query: ""
        }
<<<<<<< HEAD
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
=======
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
<<<<<<< HEAD
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchGifsApi(this.state.query)
        document.getElementById("name").value = ""
    }


    render() {
        return (
            <div className="search"> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="query">Enter a Search Term:</label><br></br>
                    <input id="name" type="text" name="query" value={this.state.qurey} onChange={this.handleOnChange}></input><br></br>
                    <input type="submit" value="Find Gifs"></input>
=======

    handleOnSubmit(e) {
        e.preventDefault()
        this.props.handleFetchApi(this.state.query)
        document.getElementById("query").value = ""
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="query">Enter a Search Term:</label><br></br>
                    <input id="query" type="text" name="query" value={this.state.query} onChange={this.handleOnChange}></input><br></br>
                    <input type="submit" value="Find Gifts"></input>
>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
                </form>
            </div>
        )
    }
}