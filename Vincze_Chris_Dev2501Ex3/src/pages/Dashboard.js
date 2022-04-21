// Import useState hook
import React, { useState } from 'react';

// Import card components
import CardLineCharts from '../components/chartCards/CardLineCharts';
import CardBarCharts from '../components/chartCards/CardBarCharts';

// Functional component vs. class component
function Dashboard() {
	// Destructuring state hook
	const [cardLineCharts] = useState([
		{ chartHeader: 'Income Overview' },
		{ chartHeader: 'Savings Overview' },
	]);

	const [cardBarCharts] = useState([
		{
			chartHeader: 'Income',
			chartSubHeader: 'PV has improved after Page A',
		},
		{
			chartHeader: 'Savings',
			chartSubHeader: 'UV has been steady',
		},
	]);

	console.log(cardLineCharts); // Array of objects, key/value pair - chartHeader: 'Income Overview'

	return (
		<section>
			<h2 style={styles.heading}>Dashboard</h2>
			<section style={styles.section}>
				{/* map() to pass values to CardLineCharts.js  */}
				{/* IMPORTANT - use return keyword or parenthesis shorthand  */}
				{cardLineCharts.map((cardLineCharts, id) => (
					<CardLineCharts key={id} id={id} cardLineCharts={cardLineCharts} />
				))}
			</section>
			<section style={styles.section}>
				{/* map() to pass values to CardBarCharts.js  */}
				{cardBarCharts.map((cardBarCharts, id) => (
					<CardBarCharts key={id} id={id} cardBarCharts={cardBarCharts} />
				))}
			</section>
		</section>
	);
}

export default Dashboard;

// Styling with CSS-in-JS
const styles = {
	section: {
		display: 'flex',
		justifyContent: 'space-between',
	},
};
