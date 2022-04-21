import React from 'react';

// Dummy component
const MyNav = props => {
	return (
		<ul style={styles.myNav}>
			<li style={styles.navListItems}>
				{/* Changed to buttons to resemble links */}
				<button style={styles.navLinks}>News Feed</button>
			</li>
			<li style={styles.navListItems}>
				<button style={styles.navLinks}>Messages</button>
			</li>
			<li style={styles.navListItems}>
				<button style={styles.navLinks}>Watch</button>
			</li>
		</ul>
	);
};

// Export
export default MyNav;

// Styling
const styles = {
	myNav: {
		listStyle: 'none',
		padding: 0,
		margin: '20px',
	},
	navListItems: {
		margin: '10px',
	},
	navLinks: {
		backgroundColor: '#7B89A6',
		padding: '10px',
		color: '#000',
		width: '100%',
		// textDecoration: 'none',
		// display: 'block',
		// margin: '20px',
		border: 'none',
		cursor: 'pointer',
	},
};
