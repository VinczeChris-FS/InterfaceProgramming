import React from 'react';
// Import Icons from React Icons
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';
import { FiSettings, FiUser } from 'react-icons/fi';
// Import components
import MyLogo from './MyLogo';
import MyIcons from './MyIcons';
// Import logo image
// import LogoUrl from '../images/logo.png';
// Import icon image
// import ImageUrl from '../images/avatar_batman.png';

// Dummy component
const MyHeader = props => {
	return (
		<header style={styles.myHeader}>
			<div style={styles.left}>
				<MyLogo LogoImg={props.LogoImg} LogoAlt="Brand Logo" />
				<h1>{props.pgTitle}</h1>
			</div>
			<div style={styles.searchCont}>
				<span style={styles.inputIcon}>
					<FaSearch />
				</span>
				<input type="text" placeholder="Search" style={styles.inputwithIcon} />
			</div>
			<div style={styles.rightSide}>
				<button style={styles.rightIcons}>
					<FiSettings />
				</button>
				<button style={styles.rightIcons}>
					<FiUser />
				</button>
				<button style={styles.rightIcons}>
					<FaEnvelope />
				</button>
				<button style={styles.rightIcons}>
					<FaBell />
				</button>
				<MyIcons IconImg={props.IconImg} ImageAlt="Icon of user" />
			</div>
		</header>
	);
};

// Export
export default MyHeader;

// Styling with CSS-in-JS
const styles = {
	myHeader: {
		backgroundColor: 'black',
		padding: '10px',
		color: 'grey',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '1px 6px 6px 1px grey',
	},
	left: {
		margin: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	searchCont: {
		border: '1px solid grey',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: '2px',
		width: '40%',
	},
	inputIcon: {
		backgroundColor: '#ddd',
		padding: '10px',
		display: 'flex',
		alignItems: 'center',
		fontSize: '1rem',
		cursor: 'pointer',
	},
	inputwithIcon: {
		border: 'none',
		flex: '1',
		padding: '10px',
	},
	rightSide: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '10px',
	},
	rightIcons: {
		backgroundColor: 'black',
		color: 'grey',
		border: 'none',
		fontSize: '1.5rem',
		cursor: 'pointer',
	},
};
