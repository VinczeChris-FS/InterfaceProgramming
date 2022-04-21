import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components from src/components
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';

// Import pages from src/pages
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Income from './pages/Income';
import Savings from './pages/Savings';
import Spending from './pages/Spending';
import Settings from './pages/Settings';

// Component defined as function vs. class
function App() {
	return (
		<div>
			<MyHeader pgTitle="Simply Bank" />
			<main style={styles.main}>
				<div style={styles.nav}>
					<MyNav />
				</div>
				<section style={styles.section}>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="reports" element={<Reports />} />
						<Route path="income" element={<Income />} />
						<Route path="savings" element={<Savings />} />
						<Route path="spending" element={<Spending />} />
						<Route path="settings" element={<Settings />} />
					</Routes>
				</section>
			</main>
		</div>
	);
}

export default App;

// Styling with CSS-in-JS
const styles = {
	main: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100vh',
	},
	nav: {
		background: 'rgb(186, 203, 217)',
		flex: 1,
	},
	section: {
		background: 'rgb(242, 235, 220)',
		flex: 3,
		padding: '1rem',
	},
};
