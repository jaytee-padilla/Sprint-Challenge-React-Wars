import React, { Component } from 'react';
import './StarWars.css';

class StarWarsChar extends Component {

    render() {
        const {homeworld, birth_year} = this.props.starwarsChar;

        return (
            <div className="charContainer">
                <h2 className="charName">{this.props.starwarsChar.name}</h2>
                <ul className="charInfoList">
                    <li>Birth Year: {birth_year}</li>
                    <li>Homeworld: {homeworld}</li>
                </ul>
            </div>
        )
    }
}

export default StarWarsChar;