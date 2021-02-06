import React from "react"
import "./styles.css"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { List } from "./List"
import { AddGame } from "./AddGame"
import { GameDetail } from "./GameDetail"
import { EditGame } from "./EditGame"

export class App extends React.Component {
    constructor(){
        super()
        console.log("Hello world")
    }


    render() {
        return(
            <Router>
            <div className="app">
                <h1>Game Library van Ali Shahid (0949886)</h1>
                <p>Use this Library to see information about games</p>
                <Switch>
                    <Route exact path="/add" component={AddGame} />
                    <Route path="/:id" component={GameDetail}></Route>
                    {/* <Route exact path="/:id/edit" component={EditGame}/> */}

                    <Route exact path="/" component={List} title="Games" />
                </Switch>

            </div>
            </Router>
        )
    }
}