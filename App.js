import React, {Component} from 'react';


class App extends Component{
	constructor(){
		super()
		this.state = {
			jokes: [],
			searchfield: ''
		}
	}

componentDidMount(){
	fetch('https://api.chucknorris.io/jokes/random')
	.then(response =>response.json())
	.then(random =>	this.setState({jokes: random}));
	}

	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
		
	
	}	

		);
		}
	
	


export default App;