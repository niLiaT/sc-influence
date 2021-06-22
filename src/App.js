import React, { Component } from 'react';
import './App.css';

import UndirectedGraph from './UndirectedGraph';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nodes: [],
			links: []
		}
	}

	componentDidMount() {
		fetch('http://127.0.0.1:8000/api/graph/')
			.then(response => response.json())
			.then(data => {
				this.setState({
					nodes: data.nodes,
					links: data.links
				})
			})
	}

	render () {
		return (
			<div className="App">
				<header className="App-header">
					<UndirectedGraph data={ this.state } />
				</header>
			</div>
		)}
}

export default App;