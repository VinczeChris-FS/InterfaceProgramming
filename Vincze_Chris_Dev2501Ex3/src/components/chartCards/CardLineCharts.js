import React from 'react';
// Import chart
import LineCharts from '../charts/LineCharts';

// Passed array of objects from Dashboard.js
const CardLineCharts = ({ cardLineCharts, id }) => {
	return (
		// Must have key for React
		<article key={cardLineCharts.id} style={styles.card}>
			{/* chartHeader from passed array of objects  */}
			<h3>{cardLineCharts.chartHeader}</h3>
			<LineCharts />
		</article>
	);
};

export default CardLineCharts;

const styles = {
	card: {
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',
		transition: '0.3s',
		minHeight: '100%',
		background: 'white',
		padding: '1rem',
	},
};
