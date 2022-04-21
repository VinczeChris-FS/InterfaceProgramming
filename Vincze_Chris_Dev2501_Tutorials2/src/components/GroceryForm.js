import React from 'react';
import MyBtn from './MyBtn';

// Dummy component
const GroceryForm = props => {
	return (
		<form onSubmit={props.addItem}>
			<input
				name="gName"
				value={props.gName}
				onChange={props.getInput}
				placeholder="Title"
			/>
			<input
				name="gDescp"
				value={props.gDescp}
				onChange={props.getInput}
				placeholder="Description"
			/>
			<MyBtn {...props} />
		</form>
	);
};

export default GroceryForm;
