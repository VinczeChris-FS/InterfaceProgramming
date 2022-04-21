import { Routes, Route } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import Dashboard from './pages/Dashboard';
import ChartDash from './pages/ChartDash';
import FormDash from './pages/FormDash';
import EmailDash from './pages/EmailDash';
import Settings from './pages/Settings';
import Income from './pages/Income';
import './App.css';

function App() {
	return (
		<div style={styles.container}>
			<MyHeader pgTitle="Simply Bank" />
			<main style={styles.main}>
				<div style={styles.nav}>
					<MyNav />
				</div>
				<section style={styles.section}>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						{/* <Route path="dashboard" element={<Dashboard />} /> */}
						<Route path="chartDash" element={<ChartDash />} />
						<Route path="formDash" element={<FormDash />} />
						<Route path="emailDash" element={<EmailDash />} />
						<Route path="settings" element={<Settings />} />
						<Route path="income" element={<Income />} />
					</Routes>
				</section>
			</main>
		</div>
	);
}

export default App;

// Styling with CSS-in-JS
const styles = {
	container: {
		// display: 'flex',
		// flexDirection: 'column',
		// background: 'lightgrey',
	},
	main: {
		display: 'flex',
		flexDirection: 'row',
		height: '100vh',
	},
	nav: {
		background: 'lightblue',
		flex: 1,
	},
	section: {
		background: 'grey',
		flex: 3,
		padding: '2rem',
	},
};
