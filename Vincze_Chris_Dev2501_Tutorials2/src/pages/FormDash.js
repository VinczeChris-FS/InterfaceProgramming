import React, { Component } from 'react';
import UserForm from '../components/UserForm';

// Random User Generator API
// https://randomuser.me

// 1. Put on settings page? Create new UserProfile component instead of UserForm.
// 2. Convert this to functional component for Exercise
// 3. Using useState hook instead of state

// import React, { useState } from  'react'

// useState hook
// array destructuring uses brackets
// accepts initial state, can be string, number, booleans, array, or object
// returns current state and function to update the state
// function accepts new state value and re-renders

// const [userData, setUserData] = useState([]);
// const [isLoaded, setIsLoaded] = useState([{isLoaded: true}]);
// or const [isLoaded, setIsLoaded] = useState(true);

// setUserData / setIsLoaded need to update where setState
// setUserData([userData]);
// setIsLoaded(true);

// 4. Lifecycle are not needed with functional components, use useEffect hook instead

class FormDash extends Component {
	// State object
	// Empty array, isLoaded boolean
	state = {
		userData: [],
		isLoaded: true,
	};

	// Lifecycle are not needed with functional components
	// use useEffect hook

	// Lifecycle for initial load of component
	// Class function
	componentDidMount() {
		// Boolean variable from state
		const loaded = this.state.isLoaded;
		// When true then call fetchData function
		if (loaded) {
			console.log('isLoaded is true');
			this.fetchData();
		} else {
			console.log('Error');
		}
	}

	// Similar to componentDidMount and componentDidUpdate:
	//   useEffect(() => {
	//   });

	// Class function
	fetchData() {
		// Update state using setState and component re-renders
		this.setState({
			isLoaded: true,
			userData: [],
		});
		// Use fetch() to get JSON from API
		fetch('https://randomuser.me/api/?nat=us')
			// Get response and return data converted to JSON
			.then(response => response.json())
			// Get JSON and store in variable
			.then(responseJSON =>
				// Use map() to return array of objects
				responseJSON.results.map(user => ({
					// User data from JSON
					firstName: `${user.name.first}`,
					lastName: `${user.name.last}`,
					// userName: `${user.login.username}`,
				}))
			)
			// Update state with array returned from map()
			.then(userData =>
				this.setState({
					userData,
					isLoaded: false,
				})
			)
			.catch(err => console.log(err));
	}

	render() {
		// Object destructuring
		// Unpack values from object into separate variables
		const { isLoaded, userData } = this.state;
		// console.log(isLoaded, userData); // boolean, array of objects
		return (
			<div>
				<h1>User Profile</h1>
				{/* Ternary operator, when isLoaded is false and there is user data, then load UserForm component */}
				{!isLoaded && userData.length > 0
					? userData.map((element, index) => {
							console.log(element);
							// Object destructuring
							const { firstName, lastName } = element;
							// Iteration with map() requires key
							return (
								<UserForm
									key={index}
									firstName={firstName}
									lastName={lastName}
								/>
							);
					  })
					: null}
			</div>
		);
	}
}

export default FormDash;
