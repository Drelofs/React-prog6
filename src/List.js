import React from "react"
import "./styles.css"

import { Game } from "./Game" 

const uri = "http://145.24.222.27:8000/games/"

export class List extends React.Component {
    constructor(){
        super()
        console.log("Ik ben een list")
        this.state = {
            subtitle: "Available games",
            games:[]
        }
        this.loadGames() 
    }

    loadGames(){
        // fetch("https://pokeapi.co/api/v2/pokemon")
        fetch(uri, {
            method: 'GET', // GET, POST, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // no-cache, reload etc
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => this.gamesLoaded(data))
            .catch((error) => console.log(error))
    }

    gamesLoaded(data){
        console.log("Games loaded!")
        console.log(data.items)
        this.setState({
            games:data.items
        })
    }

    //JSX
    render(){
        const allGames = this.state.games.map((game, index) => (
            <Game key={index} game={game} />
        ))
        return(
            <div className="list">
                <a href="/add">Add Game</a>
                <h4>{this.props.title}</h4>
                <p>Aantal games: {this.state.games.length}</p>
                <table>
                    {allGames}
                </table>
            </div>
        )
    }
}