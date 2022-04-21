import React from 'react';

// Import Icons from React Icons
import { FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

// Import components
import MyLogo from './MyLogo';
import MyIcons from './MyIcons';

// Import logo image
import LogoUrl from '../images/logo.png';

// Import icon image
import ImageUrl from '../images/avatar_batman.png';

// Dummy component
const MyHeader = props => {
	return (
		<header style={styles.myHeader}>
			<div style={styles.left}>
				<MyLogo LogoImg={LogoUrl} LogoAlt="Brand Logo" />
				<h1>{props.pgTitle}</h1>
			</div>
			<div style={styles.searchCont}>
				<input type="text" placeholder="Search" style={styles.inputwithIcon} />
				<span style={styles.inputIcon}>
					<FaSearch />
				</span>
			</div>
			<div style={styles.rightSide}>
				<button style={styles.rightIcons}>
					<FiSettings />
				</button>
				<MyIcons
					IconImg={ImageUrl}
					ImageAlt="Icon of user"
					UserName="DarkKnight93"
				/>
			</div>
		</header>
	);
};

// Export
export default MyHeader;

// Styling with CSS-in-JS
const styles = {
	myHeader: {
		backgroundColor: '#3C4473',
		padding: '10px',
		color: '#7B89A6',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)',
		position: 'relative',
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
		gap: '20px',
	},
	rightIcons: {
		backgroundColor: 'inherit',
		color: '#7B89A6',
		border: 'none',
		fontSize: '1.5rem',
		cursor: 'pointer',
	},
};
