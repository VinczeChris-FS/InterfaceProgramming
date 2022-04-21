import React from 'react';

// Dummy component
const MyIcons = props => {
	return (
		<div style={styles.iconContainer}>
			<img src={props.IconImg} alt={props.ImageAlt} style={styles.myIcons} />
			<p>{props.UserName}</p>
		</div>
	);
};

// Export
export default MyIcons;

// Styling
const styles = {
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	myIcons: {
		height: '50px',
		cursor: 'pointer',
		borderRadius: '50%',
		marginRight: '10px',
	},
};
