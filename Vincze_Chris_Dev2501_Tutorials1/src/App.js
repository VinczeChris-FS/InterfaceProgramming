import { Component } from 'react';

// Import components from src/components
import MyHeader from './components/MyHeader';
import MyForm from './components/MyForm';
import MyAds from './components/MyAds';
import GroceryArticle from './components/GroceryArticle';
import GroceryForm from './components/GroceryForm';

// Import images
import AdImg1 from './images/credit_cards.jpg';
import AdImg2 from './images/credit_card_reader.jpg';
import Bread from './images/bread.jpg';
import Cheese from './images/cheese.jpg';
import MyLogo from './images/logo.png';
import ImgUrl from './images/avatar_batman.png';

// Component defined as ES6+ class
class App extends Component {
	// State object to store databinding property and g(rocery)List array
	// For project, post: [{pAvatar: xxxx, pName: xxxx, pDescp: xxxx }]
	state = {
		databinding: '',
		gList: [
			{
				gName: 'Bread',
				gDescp: 'Made with flour and butter',
				gImg: Bread,
				gAlt: 'Image of bread',
			},
			{
				gName: 'Cheese',
				gDescp: 'Made with milk',
				gImg: Cheese,
				gAlt: 'Image of cheese',
			},
		],
	};

	// Function to update state with value from input field
	changeInputText = e => {
		this.setState({ databinding: e.target.value });
	};

	// Function to update state using input field values
	getInput = e => {
		console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value });
		// this.setState({ gName: e.target.value });
	};

	// Function to add using spread
	addItem = e => {
		// Prevent submit
		e.preventDefault();
		// console.log('added!');
		// Spread operator so original array isn't changed
		this.setState({
			gList: [
				...this.state.gList,
				{ gName: this.state.gName, gDescp: this.state.gDescp },
			],
		});
		// Clear form
		e.target.reset();
	};

	// Function to delete
	// removeItem = key => {
	// 	// console.log('works');
	// 	const newgList = [...this.state.gList];
	// 	// Remove for gList array (start, deleteCount)
	// 	newgList.splice(key, 1);
	// 	this.setState(() => ({
	// 		gList: newgList,
	// 	}));
	// };

	// Use filter method instead
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	removeItem = key => {
		// console.log(key);
		// console.log(this.state.gList[0]);
		const newgList = this.state.gList.filter((item, index) => {
			return index !== key;
		});
		// console.log(newgList);
		this.setState({ gList: newgList });
	};

	doSomething = () => {
		console.log('@@#$@#$');
	};

	render() {
		// New array that returns something using map() method
		// Array populated with results of the callback function
		// map() calls a function once for each element in an array
		// let groceryList = this.state.gList.map((element, i) => {
		// console.log(element); // current element, i.e. gList object {gName: 'Bread', dDescp: 'Made with...}
		// console.log(i); // index of current element, i.e. 0
		// Returns GroceryArticle components with gList array objects
		// 	return (
		// 		<GroceryArticle
		// 			key={i}
		// 			val={element}
		// 			delMe={() => this.removeItem(i)}
		// 		/>
		// 	);
		// });

		// console.log(typeof groceryList); // object

		return (
			<div className="App" style={styles.container}>
				<MyHeader pgTitle="socialPost" LogoImg={MyLogo} IconImg={ImgUrl} />
				<div style={styles.main}>
					<div style={styles.container}>
						<form>
							<input
								type="text"
								placeholder="Search"
								onChange={this.changeInputText}
							/>
							<p>New Item: {this.state.databinding}</p>
							<button type="button" onClick={this.doSomething}>
								Hit Me
							</button>
						</form>
						<GroceryForm
							getInput={this.getInput}
							addItem={this.addItem}
							btnText="Add Grocery Item"
						/>
					</div>
					<div style={styles.container2}>
						{/* {groceryList} */}
						{this.state.gList.map((element, i) => {
							return (
								<GroceryArticle
									key={i}
									val={element}
									delMe={() => this.removeItem(i)}
								/>
							);
						})}
						<MyForm />
					</div>
					<div style={styles.container}>
						<MyAds ImgUrl={AdImg1} ImgAlt="Advertisement 1 for Simply Bank" />
						<MyAds ImgUrl={AdImg2} ImgAlt="Advertisement 2 for Simply Bank" />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

// Styling with CSS-in-JS
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		background: 'lightgrey',
		height: '100vh',
		flex: 1,
	},
	container2: {
		flex: 2,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	main: {
		display: 'flex',
		flexDirection: 'row',
	},
	column: {
		flex: 1,
	},
};
