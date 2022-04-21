import React from 'react';
// Import Link
import { Link } from 'react-router-dom';

// Import React Icons
import {
	BsMenuUp,
	BsNewspaper,
	BsCurrencyDollar,
	BsPiggyBankFill,
} from 'react-icons/bs';

// Dummy component
const MyNav = props => {
	return (
		<nav>
			<ul style={styles.myNav}>
				<li style={styles.navListItems}>
					<Link to="/" style={styles.navLinks}>
						<BsMenuUp /> Dashboard
					</Link>
				</li>
				<li style={styles.navListItems}>
					<Link to="/reports" style={styles.navLinks}>
						<BsNewspaper /> Reports
					</Link>
				</li>
				<li style={styles.navListItems}>
					<Link to="/income" style={styles.navLinks}>
						<BsCurrencyDollar /> Income
					</Link>
				</li>
				<li style={styles.navListItems}>
					<Link to="/savings" style={styles.navLinks}>
						<BsPiggyBankFill /> Savings
					</Link>
				</li>
			</ul>
		</nav>
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
		fontSize: '1.25rem',
	},
	navListItems: {
		margin: '20px',
	},
	navLinks: {
		backgroundColor: '#7B89A6',
		padding: '10px',
		color: '#000',
		width: '100%',
		textDecoration: 'none',
		display: 'block',
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		gap: '15px',
	},
};
