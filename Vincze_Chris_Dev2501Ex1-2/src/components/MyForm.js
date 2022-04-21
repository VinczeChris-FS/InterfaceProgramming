import React from 'react';

// Import components
import MyIcons from './MyIcons';
import MyBtn from './MyBtn';

// Import icon image
import ImageUrl from '../images/avatar_batman.png';

// Dummy component
const MyForm = props => {
	return (
		<form style={styles.myForm} onSubmit={props.addItem}>
			<MyIcons
				IconImg={ImageUrl}
				ImageAlt="Icon of user"
				UserName="DarkKnight93"
			/>
			<div style={styles.inputContainer}>
				<input
					name="pName"
					value={props.pName}
					onChange={props.getInput}
					placeholder="Post Title"
					style={styles.input}
				/>
			</div>
			<div style={styles.inputContainer}>
				<input
					name="pDescp"
					value={props.pDescp}
					onChange={props.getInput}
					placeholder="Post Description"
					style={styles.input}
				/>
			</div>
			<div style={styles.buttonContainer}>
				<MyBtn btnText="Create Post" />
			</div>
		</form>
	);
};

// Export
export default MyForm;

// Styling with CSS-in-JS
const styles = {
	myForm: {
		padding: '15px',
		backgroundColor: '#DFCFAE',
		color: 'black',
		boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)',
	},
	inputContainer: {
		display: 'flex',
		marginBottom: '10px',
	},
	input: {
		padding: '10px',
		margin: '5px',
		flex: '1',
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
