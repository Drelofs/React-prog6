import React from "react"
import "./styles.css"

export class EditGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            id: "",
            developer: "",
            genre: "",
            description: ""
        }
        console.log(this.props)
    }

    componentDidMount(){
        fetch(`http://145.24.222.27:8000/games/${this.props.match.params.id}`, {
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


    handleOnSubmit(event){
        event.preventDefault();
        const body = {
            name: event.target.name.value,
            developer: event.target.developer.value,
            genre: event.target.genre.value,
            description: event.target.description.value
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        fetch(`http://145.24.222.27:8000/games/${this.state.id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: myHeaders,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .catch((error) => console.log(error))
        this.props.history.push('./');
    }

    handleNameOnChange(event){
        this.setState({name: event.target.value})
    }

    handleDeveloperOnChange(event){
        this.setState({developer: event.target.value})
    }

    handleGenreOnChange(event){
        this.setState({genre: event.target.value})
    }

    handleDescriptionOnChange(event){
        this.setState({description: event.target.value})
    }

    //JSX
    render(){

        return(
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    Name: <input name="name" type="text" value={this.state.name} onChange={(event) => this.handleNameOnChange(event)} /><br/>
                    Developer: <input name="developer" type="text" value={this.state.developer} onChange={(event) => this.handleDeveloperOnChange(event)} /><br/>
                    Genre: <input name="genre" type="text" value={this.state.genre} onChange={(event) => this.handleGenreOnChange(event)}/><br />
                    Description: <textarea name="description" value={this.state.description} onChange={(event) => this.handleDescriptionOnChange(event)}></textarea><br/>
                    <input type="submit" value="Aanpassen" />
                </form>
            </div>
        )
    }
}