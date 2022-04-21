import React from 'react';

// Dummy component
const MyIcons = props => {
	return (
		<img src={props.IconImg} alt={props.ImageAlt} style={styles.myIcons} />
	);
};

// Export
export default MyIcons;

// Styling
const styles = {
	myIcons: {
		height: '50px',
		cursor: 'pointer',
		borderRadius: '50%',
	},
};
