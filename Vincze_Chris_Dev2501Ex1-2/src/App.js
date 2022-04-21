import React, { Component } from 'react';

// import components from src/components
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import MyForm from './components/MyForm';
import MyPost from './components/MyPost';
import MyAds from './components/MyAds';

// Import ad images
import AdImg1 from './images/credit_cards.jpg';
import AdImg2 from './images/credit_card_reader.jpg';

// Import avatar image
import ImgUrl from './images/avatar_batman.png';

// Component defined as ES6+ class
class App extends Component {
	// State object to store posts data, array of objects
	state = {
		posts: [
			{
				pAvatar: ImgUrl,
				pName:
					'Horrified Anti-Vaxxer Discovers Every American Who Got Smallpox Vaccine in 19th Century Now Dead',
				pDescp:
					'LYNCHBURG, VA—Astounded by the damning information, local anti-vaxxer Pete Dixon was reportedly horrified Thursday after discovering that every single American who got a smallpox vaccine in the 19th century was now deceased. “We’re expected to…',
			},
		],
		color: 'darkgrey',
	};

	// Lifecycle method
	componentDidMount() {
		console.log('componentDidMount', this.state.color);
		// Change the state after 2 seconds from when component is rendered
		setTimeout(() => {
			this.setState({ color: 'black' });
		}, 2000);
	}

	// Function to update state using input field values
	getInput = e => {
		// console.log(e.target.name);
		// console.log(e.target.value);
		this.setState({ pAvatar: ImgUrl, [e.target.name]: e.target.value });
	};

	// Function to add post using using spread operator
	addItem = e => {
		// Prevent submit
		e.preventDefault();
		// console.log('Added');
		// Spread operator so original array isn't changed/mutated
		this.setState({
			posts: [
				...this.state.posts,
				{
					pAvatar: this.state.pAvatar,
					pName: this.state.pName,
					pDescp: this.state.pDescp,
				},
			],
		});
		// Clear form
		e.target.reset();
	};

	// Function to delete post using filter method
	removeItem = key => {
		// console.log(key);
		// console.log(this.state.gList[0]);
		const newPosts = this.state.posts.filter((item, index) => {
			return index !== key;
		});
		// console.log(newgList);
		this.setState({ posts: newPosts });
	};

	render() {
		// map() method returns postList array containing MyPost component with new post data
		let postList = this.state.posts.map((element, i) => {
			return <MyPost key={i} val={element} delete={() => this.removeItem(i)} />;
		});

		console.log('Render lifecycle', this.state.color);

		// Repetitive output appears on the screen? Console error
		this.setState({ color: 'black' });

		return (
			<div className="App">
				<MyHeader pgTitle="socialPost" />
				<main style={styles.container}>
					{/* Replaced extra div with nav element */}
					<nav style={styles.nav}>
						<h2 style={{ color: this.state.color, margin: '10px 30px' }}>
							Dashboard
						</h2>
						<MyNav />
					</nav>
					<section style={styles.main}>
						<MyForm getInput={this.getInput} addItem={this.addItem} />
						{postList}
					</section>
					<aside style={styles.ads}>
						<MyAds ImgUrl={AdImg1} ImgAlt="Advertisement 1 for Simply Bank" />
						<MyAds ImgUrl={AdImg2} ImgAlt="Advertisement 2 for Simply Bank" />
					</aside>
				</main>
			</div>
		);
	}
}

export default App;

// Styling with CSS-in-JS
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
	},
	nav: {
		flex: 1,
		backgroundColor: '#BACBD9',
	},
	main: {
		flex: 2,
		backgroundColor: '#F2EBDC',
	},
	ads: {
		flex: 1,
		backgroundColor: 'lightgrey',
	},
};
