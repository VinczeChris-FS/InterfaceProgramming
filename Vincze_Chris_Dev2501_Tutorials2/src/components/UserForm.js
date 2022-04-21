import React from 'react';

const UserForm = props => {
	// console.log(props.firstName, props.lastName); // strings
	return (
		// <article key={props.id}>
		// 	<p>{props.firstName}</p>
		// 	<p>{props.lastName}</p>
		// </article>

		<dl>
			<dt>
				<strong>First Name:</strong>
			</dt>
			<dd>{props.firstName}</dd>
			<dt>
				<strong>Last Name:</strong>
			</dt>
			<dd>{props.lastName}</dd>
		</dl>

		/* <form>
				<div>
					<label for="fname">First Name</label>
					<input type="text" id="fname" value={props.firstName} />
				</div>
				<div>
					<label for="fname">Last Name</label>
					<input type="text" id="fname" value={props.lastName} />
				</div>
			</form> */
	);
};

export default UserForm;
