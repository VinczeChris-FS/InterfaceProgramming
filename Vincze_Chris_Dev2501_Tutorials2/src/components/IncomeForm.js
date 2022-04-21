import React, { useState } from 'react';

// Passed function from Income.js
function IncomeForm({ addIncome }) {
	const [value, setValue] = useState('');
	// console.log(typeof value); // current value is empty string
	// console.log(typeof setValue); // function to change state

	const validateForm = e => {
		// console.log('Validate!');
		// Prevent page load
		e.preventDefault();
		// Validate, if no value then do nothing
		if (!value) {
			return;
		}
		// Send value to function from Income.js
		addIncome(value);
		// Reset to empy string
		setValue('');
	};

	return (
		<form onSubmit={validateForm}>
			<p>Add Income:</p>
			<input
				type="text"
				// value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button>Add Income</button>
		</form>
	);
}

export default IncomeForm;
