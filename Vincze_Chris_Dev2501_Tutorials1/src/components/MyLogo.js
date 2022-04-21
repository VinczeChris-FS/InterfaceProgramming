import React from 'react';

// Dummy component
const MyLogo = props => {
	return <img src={props.LogoImg} alt={props.LogoAlt} style={styles.myLogo} />;
};

// Export
export default MyLogo;

// Styling
const styles = {
	myLogo: {
		borderRadius: '50%',
		height: '100px',
		marginRight: '20px',
		padding: '10px',
		backgroundColor: 'white',
		alignItems: 'center',
	},
};
