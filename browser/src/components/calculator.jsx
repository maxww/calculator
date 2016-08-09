import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Viewwindow from './view_window';

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttons: [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				"+",
				"-",
				"*",
				"/",
				"+/-",
				"%",
				"=",
				".",
				"AC"

			],
			tempview: ""
		}
	}
	renderButtons() {
		let updateTempView = this.updateTempView.bind(this)
		return this.state.buttons.map((val, idx) => <Button updateTempView={updateTempView} key={idx} val={val}></Button>)
	}
	render() {
		return (
			<div>
				<Viewwindow viewwindow={this.props.viewwindow}/>
				<div>
					{this.renderButtons()}
				</div>
			</div>
		)
	}
	updateTempView(input) {
		let accum = this.state.tempview + input;
		this.setState({tempview: accum})
		this.props.updateViewwindow(accum)
	}
}
