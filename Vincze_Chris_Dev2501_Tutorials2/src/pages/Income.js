// Import useState hook
import React, { useState } from 'react';

// Import components
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';

// Functional component vs. class component
function Income() {
	const pageTitle = 'Income';

	// Destructuring
	// useState hook
	const [myIncome, setmyIncome] = useState([
		{ income: '209.00', saving: '1.99', spending: '20' },
		{ income: '400.00', saving: '1.99', spending: '20' },
		{ income: '600.00', saving: '1.99', spending: '20' },
	]);

	// console.log(typeof myIncome); // array of objects, key/value pair - income/'209.00'
	// console.log(typeof setmyIncome); // function to change state

	const addIncome = income => {
		// Spread operator to make a copy of the array of objects
		// Update with new object, key/value pair - income/passed value from IncomeForm.js
		const newIncome = [...myIncome, { income }];
		// Function to change state
		// Copy is passed into function
		setmyIncome(newIncome);
	};

	const removeIncome = id => {
		// Spread operator to make a copy of the array of objects
		const newIncome = [...myIncome];
		// Remove array element using splice method
		newIncome.splice(id, 1);
		// Function to change state
		// Copy is passed into function
		setmyIncome(newIncome);
	};

	return (
		<section>
			<h1>{pageTitle}</h1>
			{/* Pass function to component */}
			<IncomeForm addIncome={addIncome} />
			<ul>
				{/* map() to pass values to IncomeList.js  */}
				{/* IMPORTANT - use return keyword or parenthesis shorthand  */}
				{myIncome.map((myIncome, id) => {
					return (
						<IncomeList
							key={id}
							id={id}
							myIncome={myIncome}
							removeIncome={removeIncome}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default Income;
