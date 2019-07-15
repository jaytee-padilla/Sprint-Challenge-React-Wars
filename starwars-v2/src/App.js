import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/CharacterList';

export default function App() {
	const [swData, setSWData] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.co/api/people')
		.then(response => setSWData(response.data))
		.catch(error => console.log(error))
	}, []);

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
				{!swData[0] ? <h1>Loading...</h1> : <CharacterList swData={swData} />}
      </div>
    );
}