import React from 'react';

// Dummy component
const MyAds = props => {
	return (
		<article style={styles.myAd}>
			<h1 style={styles.adHeading}>Banking Made Simple For You</h1>
			<img src={props.ImgUrl} alt={props.ImgAlt} style={styles.adImage} />
			<div>
				<button style={styles.adBtn}>Sign Up</button>
			</div>
			<h2>Simply.</h2>
		</article>
	);
};

// Export
export default MyAds;

// Styling with CSS-in-JS
const styles = {
	myAd: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '300px',
		height: '500px',
		backgroundColor: '#F3C8FF',
		color: '#000',
		padding: '15px',
		margin: '10px',
		border: '1px solid #000',
	},
	adHeading: {
		fontSize: '2rem',
		borderTop: '4px solid #000',
		pddingTop: '10px',
	},
	adImage: {
		width: '100%',
		border: '1px solid #000',
	},
	adBtn: {
		backgroundColor: '#000',
		color: '#F3C8FF',
		border: 'none',
		borderRadius: '5px',
		padding: '10px 30px',
		cursor: 'pointer',
	},
};
