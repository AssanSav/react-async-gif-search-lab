import React, { Component } from "react"

import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"


export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifts: []
        }
        this.handleFetchApi = this.handleFetchApi.bind(this)
    }

    handleFetchApi(query = "dolphin") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=NDPJ3ViqjEETJiBLN9e0nzh39w9AOUtr&limit=3`)
            .then(resp => resp.json())
            .then(({ data }) => this.setState({
                gifts: data.map(gif => gif.images.original.url)
            }))
    }

    componentDidMount() {
        this.handleFetchApi()
    }

    render() {
        return (
            <div>
                <GifList gifts={this.state.gifts} />
                <GifSearch handleFetchApi={this.handleFetchApi} />
            </div>
        )
    }
}