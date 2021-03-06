import React, { useState } from "react"

import "./AddPerson.css"

const AddPerson = (props) => {
	const [person, setPerson] = useState({
		name: "",
		age: "",
	})

	const nameChangedHandler = (e) => {
		setPerson({ ...person, name: e.target.value })
	}

	const ageChangedHandler = (e) => {
		setPerson({ ...person, age: e.target.value })
	}

	return (
		<div className="AddPerson">
			<input
				value={person.name}
				onChange={nameChangedHandler}
				type="text"
				placeholder="Name"
			/>
			<input
				value={person.age}
				onChange={ageChangedHandler}
				type="number"
				placeholdeor="Age"
			/>
			<button
				onClick={() =>
					props.personAdded(Math.random(), person.name, person.age)
				}
			>
				Add Person
			</button>
		</div>
	)
}

export default AddPerson
