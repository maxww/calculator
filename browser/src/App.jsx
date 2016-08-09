import React from 'react';
import Calculator from './components/calculator'
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewwindow: "",
			nums: null,
			operator: null
		}

	}
	render() {
		return (
			<div>
				<h4>Calculator App</h4>
				<Calculator buttons={this.state.buttons} viewwindow={this.state.viewwindow} updateViewwindow={this.updateViewwindow.bind(this)}/>
			</div>
		)
	}
	updateViewwindow(input) {
		input = this.state.viewwindow + input;
		this.setState({viewwindow: input})
	}
}
