import React, { Component } from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
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
            </div>
        )
    }
}