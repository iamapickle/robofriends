import React from 'react';
import CardList from './CardList';
 import "./App.css";
import SearchBox from './SearchBox.js';


// const App=()=>{
// 	return (
// 		<div>
// 			<div className='vodo'>
// 			   <h1>RobotFriends</h1>
// 			   <SearchBox />
// 			</div>
// 			<div>
// 				<CardList robots={robots}/>
// 			</div>
// 		</div>
// 		);
// }

class App extends React.Component{

	constructor(){
		super()
		this.state={
			Robot:[],
			searchField:'',
		}
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users/')
		.then(response=>
			response.json())
		.then(users=>this.setState({robots:users}));

	}

	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value})
		
	}

	// onSearchChange(event){
	// 	console.log(event.target.value);
	// }

	render(){
		const FilterRobots=this.state.Robot.filter(Robot=>{
			return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		}) 
		console.log(FilterRobots);
		return (
		<div>
			<div className='vodo'>
			   <h1>RobotFriends</h1>
			   <SearchBox  SearchChange={this.onSearchChange}/>
			</div>
			<div>
				<CardList robots={FilterRobots}/>
			</div>
		</div>
		);
	}

}

export default App;