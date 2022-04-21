import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

// Use functional component vs. class
function Settings() {
	// useState hooks
	// Accepts initial state, can be string, number, booleans, array, or object
	// Returns current state and function to update the state
	// Function accepts new state value and re-renders
	const [userData, setUserData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(true);
	// console.log(userData, isLoaded); // empty array, boolean

	// Lifecycle are not needed with functional components, use useEffect hook instead
	// Initial load of component
	useEffect(() => {
		// Using async/await with fetch API
		async function fetchData() {
			console.log('called');
			// Update useState hooks
			setUserData([]);
			setIsLoaded(true);
			// Use fetch() to get JSON from API
			const response = await fetch('https://randomuser.me/api/?nat=us');
			// Get response and return data converted to JSON
			const responseJSON = await response.json();
			return responseJSON;
		}
		// Call function
		fetchData()
			// Get JSON and store in variable
			.then(responseJSON =>
				// Use map() to return an object
				responseJSON.results.map(user => {
					return {
						// User data from JSON
						imgURL: `${user.picture.large}`,
						firstName: `${user.name.first}`,
						lastName: `${user.name.last}`,
						userName: `${user.login.username}`,
						password: `${user.login.password}`,
						phone: `${user.phone}`,
						address: `${user.location.street.number} ${user.location.street.name}`,
						city: `${user.location.city}`,
						state: `${user.location.state}`,
						zipcode: `${user.location.postcode}`,
					};
				})
			)
			// Update useSate hook with object returned from map()
			.then(userProfile => setUserData([userProfile]), setIsLoaded(false))
			.catch(err => console.log(err));
		// To prevent infinite loop for useEffect hook
	}, []);

	// console.log(userData, isLoaded); // array with object, boolean

	// Ternary operator, when isLoaded is false and there is user data, then load UserProfile component
	// Using map() even though there is only one thing in the array b/c it returns something
	return (
		<section>
			<h2>User Profile</h2>
			{!isLoaded && userData.length > 0
				? userData.map((element, index) => {
						// console.log(element);
						// Array destructuring
						// Unpack value from array into separate object variable
						const [user] = element;
						// console.log(user);
						// Object destructuring into separate string variables
						const {
							imgURL,
							firstName,
							lastName,
							userName,
							password,
							phone,
							address,
							city,
							state,
							zipcode,
						} = user;
						// console.log(firstName, lastName);
						// Iteration with map() requires key
						return (
							<UserProfile
								key={index}
								imgURL={imgURL}
								firstName={firstName}
								lastName={lastName}
								userName={userName}
								password={password}
								phone={phone}
								address={address}
								city={city}
								state={state}
								zipcode={zipcode}
							/>
						);
				  })
				: null}
		</section>
	);
}

export default Settings;
