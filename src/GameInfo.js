import React from "react"
import "./styles.css"
import { EditGame } from "./EditGame"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class GameInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            id: "",
            developer: "",
            genre: "",
            description: ""
        }
        console.log("This is detail")
    }

    componentDidMount(){
        fetch(`http://145.24.222.27:8000/games/${this.props.match.url}`, {
            method: 'GET', // GET, POST, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // no-cache, reload etc
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => this.gameLoaded(data))
            .catch((error) => console.log(error))
    }

    gameLoaded(data){
        this.setState({
            name: data.name,
            id: data._id,
            developer: data.developer,
            genre: data.genre,
            description: data.description
        })
    }

    //JSX
    render(){
        return(
                <div className="list">
                <h4>{this.state.name}</h4>
                <p>ID: {this.state.id}</p>
                <p>Developer: {this.state.developer}</p>
                <p>Genre: {this.state.genre}</p>
                <p>Description: {this.state.description}</p>
            </div>
        )
    }
}