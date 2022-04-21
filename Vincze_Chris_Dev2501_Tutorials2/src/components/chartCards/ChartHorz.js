import React from 'react';
import HorzLineCharts from '../charts/HorzLineCharts';

const ChartHorz = props => {
	return (
		<article style={styles.card}>
			<h3>{props.chartHorz.chartHeader}</h3>
			{/* <h2>{chartHorz.chartsubHeader}</h2> */}
			<HorzLineCharts />
		</article>
	);
};

export default ChartHorz;

const styles = {
	card: {
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',
		transition: '0.3s',
		minHeight: '100%',
		background: 'white',
		padding: '1rem',
		// marginRight: '1rem',
	},
};
