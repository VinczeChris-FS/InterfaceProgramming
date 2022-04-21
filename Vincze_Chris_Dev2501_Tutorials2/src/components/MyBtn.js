import React from 'react';

// Dummy component
const MyBtn = props => {
	return (
		// Need to add onClick because a component is not a native DOM element
		// https://stackoverflow.com/questions/28268835/react-onclick-event-on-component
		<button style={styles.redBtn} onClick={props.onClick}>
			{props.btnText}
		</button>
	);
};

// Export
export default MyBtn;

// Styling with CSS-in-JS
const styles = {
	redBtn: {
		backgroundColor: 'firebrick',
		color: 'white',
		padding: '10px',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		border: '1px solid white',
		borderRadius: '10%',
		cursor: 'pointer',
	},
};
