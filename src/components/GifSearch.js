import React, { Component } from "react"

export default class GifList extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
                </form>
            </div>
        )
    }
}