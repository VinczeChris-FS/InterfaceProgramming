import React from 'react';

// Import components
import MyIcons from './MyIcons';

// Import icon image
// import ImageUrl from '../images/avatar_batman.png';

// Import React Icon
import { FiEdit, FiDelete } from 'react-icons/fi';

// Dummy component
const MyPost = props => {
	return (
		<article style={styles.myPost}>
			<div style={styles.iconsContainer}>
				<MyIcons
					IconImg={props.val.pAvatar}
					ImageAlt="Icon of user"
					UserName="DarkKnight93"
				/>
				<div>
					<button title="Edit" style={styles.rightIcons}>
						<FiEdit />
					</button>
					<button
						title="Delete"
						style={styles.rightIcons}
						onClick={props.delete}
					>
						<FiDelete />
					</button>
				</div>
			</div>
			<h1>{props.val.pName}</h1>
			<p>{props.val.pDescp}</p>
		</article>
	);
};

// Export
export default MyPost;

// Styling with CSS-in-JS
const styles = {
	myPost: {
		padding: '15px',
		color: 'black',
		boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)',
	},
	iconsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	rightIcons: {
		color: 'black',
		backgroundColor: 'inherit',
		border: 'none',
		fontSize: '1.5rem',
		cursor: 'pointer',
	},
};
