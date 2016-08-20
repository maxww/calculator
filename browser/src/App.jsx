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
				<div className="hidden-sm col-lg-4"></div>
				<div className="col-sm-12 col-lg-4 calc">
					<Calculator buttons={this.state.buttons} viewwindow={this.state.viewwindow} updateViewwindow={updateViewwindow}/>
				</div>
				<div className="hidden-sm col-lg-4"></div>
			</div>
		)
	}
	updateViewwindow(input) {
		this.setState({viewwindow: input})
	}
}
