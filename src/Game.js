import React from "react"
import "./styles.css"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const uri = "http://145.24.222.27:8000/games/"

export class Game extends React.Component {
    constructor(){
        super()
        console.log("Constructor Game")
        this.state = {deleted: false}
    }

    deleteNote(uri){
        fetch(uri, {
            method: 'DELETE', // GET, POST, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // no-cache, reload etc
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => this.setState({deleted: true}))
            .catch((error) => console.log(error))

    }

    //JSX
    render(){
        let gameItem = "";

        if(!this.state.deleted){
            gameItem = 
            <tr> 
                <td><a className="game-link" href={"/"+this.props.game._id}>{this.props.game.name}</a></td>
                <td><a href={"/"+this.props.game._id+"/edit"}>Edit</a></td>
                <td><button onClick={() =>this.deleteNote(this.props.game._links.self.href)}>Delete</button></td>
            </tr>
        }

        return(
            gameItem
        )
    }
}