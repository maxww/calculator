import React from 'react';
import Calculator from './components/calculator'
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewwindow: "0"
		}

	}
	render() {
		let updateViewwindow = this.updateViewwindow.bind(this)
		return (
			<div className="row">
				<div className="col-lg-4 col-sm-12"></div>
				<div className="col-lg-4 col-sm-12">
					<h4>Calculator App</h4>
					<Calculator buttons={this.state.buttons} viewwindow={this.state.viewwindow} updateViewwindow={updateViewwindow}/>
				</div>
				<div className="col-lg-4 col-sm-12"></div>
			</div>
		)
	}
	updateViewwindow(input) {
		this.setState({viewwindow: input})
	}
}
