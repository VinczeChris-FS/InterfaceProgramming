import React from 'react';

// Passed array of objects, id, and function from Income.js
function IncomeList({ myIncome, id, removeIncome }) {
	return (
		<li key={myIncome.key}>
			<span>{myIncome.income}</span>
			<span>{myIncome.saving}</span>
			<span>{myIncome.spending}</span>
			<button onClick={() => removeIncome(id)}>x</button>
		</li>
	);
}

export default IncomeList;
