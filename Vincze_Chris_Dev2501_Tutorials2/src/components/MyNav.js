import React from 'react';
// Import Link
import { Link } from 'react-router-dom';

const MyNav = () => {
	return (
		<nav style={styles.navLinks}>
			<Link to="/">Icon here - Dashboard</Link>
			<Link to="/chartDash">Icon here - Chart</Link>
			<Link to="/formDash">Icon here -Form</Link>
			<Link to="/emailDash">Icon here -Email</Link>
			<Link to="/income">Icon here -Income</Link>
		</nav>
	);
};

export default MyNav;

// Styling with CSS-in-JS
const styles = {
	navLinks: {
		display: 'flex',
		flexDirection: 'column',
	},
};
