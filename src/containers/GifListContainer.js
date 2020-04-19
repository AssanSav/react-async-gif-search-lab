import React, { Component } from "react"
<<<<<<< HEAD
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

=======

import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"


>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
<<<<<<< HEAD
            gifs: []
        }
        this.fetchGifsApi = this.fetchGifsApi.bind(this)
    }

    componentDidMount() {
        this.fetchGifsApi()
    }

    fetchGifsApi(query = "dolphin") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=fYu4FEXu5ZkOFWReHeSJyywUlDia85OW&limit=3`)
            .then(resp => resp.json())
            .then(({ data }) => this.setState({
                gifs: data.map(image => image.images.original.url)
            }))
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifsApi={this.fetchGifsApi} />
=======
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
>>>>>>> 0c5cc1262679828972eee404c3fd5994636c9b2f
            </div>
        )
    }
}