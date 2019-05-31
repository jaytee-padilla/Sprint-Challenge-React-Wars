import React, { Component } from 'react';
import StarWarsChar from './starwarsChar';
import './StarWars.css';

class StarWarsCharList extends Component {
    render() {
        return (
            <div className="charListContainer">
                {this.props.starwarsChars.map(starwarsChar => <StarWarsChar key={starwarsChar.created} starwarsChar={starwarsChar} />)}
            </div>
        )
    }
}

export default StarWarsCharList;