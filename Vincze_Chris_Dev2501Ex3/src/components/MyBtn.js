import React from 'react';

// Dummy component
const MyBtn = props => {
	return <button style={styles.postBtn}>{props.btnText}</button>;
};

// Export
export default MyBtn;

// Styling with CSS-in-JS
const styles = {
	postBtn: {
		backgroundColor: '#3C4473',
		color: 'white',
		padding: '10px',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		border: 'none',
		boxShadow: '1px 1px 2px 1px black',
		borderRadius: '10%',
		cursor: 'pointer',
	},
};
