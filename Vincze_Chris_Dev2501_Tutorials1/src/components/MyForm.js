import React from 'react';

// Import component
import MyBtn from './MyBtn';

// Dummy component
const MyForm = props => {
	return (
		<form style={styles.myForm}>
			<div style={styles.inputContainer}>
				<input placeholder="First Name" style={styles.input} />
				<input placeholder="Last Name" style={styles.input} />
			</div>
			<div style={styles.inputContainer}>
				<input placeholder="Address" style={styles.input} />
				<input placeholder="City" style={styles.input} />
			</div>
			<div style={styles.inputContainer}>
				<input placeholder="State" style={styles.input} />
				<input placeholder="Zip Code" style={styles.input} />
			</div>
			<div style={styles.inputContainer}>
				<input placeholder="Email" style={styles.input} />
				<input placeholder="Phone" style={styles.input} />
			</div>
			<div style={styles.buttonContainer}>
				<button style={styles.button}>Save</button>
				<MyBtn btnText="Save" />
			</div>
		</form>
	);
};

// Export
export default MyForm;

// Styling with CSS-in-JS
const styles = {
	myForm: {
		// width: '30%',
		// margin: '0 auto',
		alignItems: 'center',
		backgroundColor: 'grey',
		color: 'black',
		borderRadius: '10px',
	},
	inputContainer: {
		padding: '10px',
	},
	input: {
		padding: '10px',
		margin: '5px',
	},
	buttonContainer: {
		textAlign: 'right',
		padding: '10px',
	},
	button: {
		backgroundColor: 'blue',
		color: 'white',
		padding: '10px',
		cursor: 'pointer',
	},
};
