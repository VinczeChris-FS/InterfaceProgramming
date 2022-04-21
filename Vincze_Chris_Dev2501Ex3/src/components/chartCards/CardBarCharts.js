import React from 'react';
// Import chart
import BarCharts from '../charts/BarCharts';

// Passed array of objects from Dashboard.js
const CardBarCharts = ({ cardBarCharts, id }) => {
	return (
		// Must have key for React
		<article key={cardBarCharts.id} style={styles.card}>
			<BarCharts />
			{/* chartHeader from passed array of objects  */}
			<h3>{cardBarCharts.chartHeader}</h3>
			<p>{cardBarCharts.chartSubHeader}</p>
		</article>
	);
};

export default CardBarCharts;

const styles = {
	card: {
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',
		transition: '0.3s',
		minHeight: '100%',
		background: 'white',
		padding: '1rem',
		margin: '1rem 0',
	},
};
