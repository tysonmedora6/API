import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{	


constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	
}

componentDidMount(){
	const urls = [
  'https://swapi.py4e.com/api/people/1',
  'https://swapi.py4e.com/api/people/2',
  'https://swapi.py4e.com/api/people/3',
  'https://swapi.py4e.com/api/people/4'
]


	Promise.all(urls.map(url => fetch(url)
	.then(people =>people.json())))
	.then(users=>this.setState({robots: users}));
}	

	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
		}	
	
	render(){
		const {robots , searchfield}= this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return(
		<div className='tc'>
		<h1 className='f1'>ROBOTFRIENDS</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<CardList robots={filteredRobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>

		);

		}
}		

export default App;
