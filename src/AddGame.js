import React from "react"
import "./styles.css"

export class AddGame extends React.Component {
    constructor(){
        super()
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
        fetch(`http://145.24.222.27:8000/games/`, {
            method: 'POST',
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

    //JSX
    render(){

        return(
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    Name: <input name="name" type="text" /><br/>
                    Developer: <input name="developer" type="text" /><br/>
                    Genre: <input name="genre" type="text" /><br />
                    Description: <textarea name="description"></textarea><br/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}