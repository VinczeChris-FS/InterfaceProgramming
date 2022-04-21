import React from 'react';
import MyBtn from './MyBtn';

// Dummy component
const GroceryArticle = props => {
	return (
		<article style={styles.myArticle}>
			<img src={props.val.gImg} alt={props.val.gAlt} />
			<h1>{props.val.gName}</h1>
			<p>{props.val.gDescp}</p>
			<div style={styles.buttons}>
				<MyBtn btnText="Edit" />
				<MyBtn btnText="Delete" onClick={props.delMe} />
				<button onClick={props.delMe}>Alt Delete</button>
			</div>
		</article>
	);
};

export default GroceryArticle;

// Styling with CSS-in-JS
const styles = {
	myArticle: {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		width: '300px',
		border: '2px solid red',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
};
