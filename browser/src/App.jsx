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
				<div className="col-lg-4 hidde-sm"></div>
				<div className="col-lg-4 col-sm-12 calc">
					<Calculator buttons={this.state.buttons} viewwindow={this.state.viewwindow} updateViewwindow={updateViewwindow}/>
				</div>
				<div className="col-lg-4 hidde-sm"></div>
			</div>
		)
	}
	updateViewwindow(input) {
		this.setState({viewwindow: input})
	}
}
