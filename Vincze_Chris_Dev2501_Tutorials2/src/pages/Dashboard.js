import React, { useState } from 'react';
import ChartHorz from '../components/chartCards/ChartHorz';

function Dashboard() {
	const pageTitle = 'Dashboard';

	// Destructuring, same syntax as original
	// useState hook, accepts initial state, returns current state
	const [chartHorz] = useState([
		{ chartHeader: 'Income Overview' },
		{ chartHeader: 'Savings Overview' },
	]);

	return (
		<section>
			<h2>{pageTitle}</h2>
			<section style={styles.chartHorz}>
				{chartHorz.map((chartHorz, id) => (
					<ChartHorz key={id} chartHorz={chartHorz} />
				))}
			</section>
		</section>
	);
}

export default Dashboard;

const styles = {
	chartHorz: {
		display: 'flex',
		justifyContent: 'space-between',
	},
};
