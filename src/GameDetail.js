import React from "react"
import "./styles.css"
import { EditGame } from "./EditGame"
import { GameInfo } from "./GameInfo"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class GameDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            id: "",
            developer: "",
            genre: "",
            description: ""
        }
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
            description: data.description,
            game: data
        })
    }

    //JSX
    render(){

        const game = this.state.game
        return(
            <Router>
                <Switch>                    
                    <Route exact path={"/:id/edit"} component={EditGame} game={game}/>
                    <Route exact path="/:id" component={GameInfo}/>
                </Switch>
            </Router>
                
            
        )
    }
}