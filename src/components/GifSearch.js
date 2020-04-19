import React, { Component } from "react"

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
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
                </form>
            </div>
        )
    }
}