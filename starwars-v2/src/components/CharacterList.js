import React from 'react'

export default function CharacterList(props) {
	return (
		<div>
			{props.swData.results.map(character => <h1>{character.name}</h1>)}
		</div>
	)
}
