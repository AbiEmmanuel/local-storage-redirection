import { Component } from 'react'

export default class Welcome extends Component {
    render() {
        const character = JSON.parse(localStorage.getItem('character'))
        return (
            <div>
                <h1>Welcome {character.name}</h1>
            </div>
        )
    }
}
