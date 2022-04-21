import React from 'react';

const UserProfile = props => {
	// console.log(props.firstName, props.lastName); // strings
	return (
		<dl style={styles.dl}>
			<dt style={styles.dt}>
				<strong>Profile Photo:</strong>
			</dt>
			<dd style={styles.ddImg}>
				<img src={props.imgURL} alt="User" style={styles.img} />
			</dd>
			<dt style={styles.dt}>
				<strong>First Name:</strong>
			</dt>
			<dd style={styles.dd}>{props.firstName}</dd>
			<dt style={styles.dt}>
				<strong>Last Name:</strong>
			</dt>
			<dd style={styles.dd}>{props.lastName}</dd>
			<dt style={styles.dt}>
				<strong>Username:</strong>
			</dt>
			<dd style={styles.dd}>{props.userName}</dd>
			<dt style={styles.dt}>
				<strong>Password:</strong>
			</dt>
			<dd style={styles.dd}>{props.password}</dd>
			<dt style={styles.dt}>
				<strong>Phone:</strong>
			</dt>
			<dd style={styles.dd}>{props.phone}</dd>
			<dt style={styles.dt}>
				<strong>Address:</strong>
			</dt>
			<dd style={styles.dd}>{props.address}</dd>
			<dt style={styles.dt}>
				<strong>City:</strong>
			</dt>
			<dd style={styles.dd}>{props.city}</dd>
			<dt style={styles.dt}>
				<strong>State:</strong>
			</dt>
			<dd style={styles.dd}>{props.state}</dd>
			<dt style={styles.dt}>
				<strong>Zip code:</strong>
			</dt>
			<dd style={styles.dd}>{props.zipcode}</dd>
		</dl>
	);
};

export default UserProfile;

// Styling with CSS-in-JS
const styles = {
	dl: {
		padding: '0 10rem',
	},
	ddImg: {
		textAlign: 'center',
	},
	img: {
		borderRadius: '0.5rem',
		boxShadow: '0 0.25px 1rem rgba(0, 0, 0, 0.25)',
		border: '0.25rem solid white',
	},
	dt: {
		margin: '0.5rem 0',
		paddingLeft: '1rem',
	},
	dd: {
		margin: 0,
		padding: '1rem',
		background: '#fff',
	},
};
