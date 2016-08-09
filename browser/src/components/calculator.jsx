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

			]
		}
	}
	renderButtons() {
		return this.state.buttons.map((val, idx) => <Button updateViewwindow={this.props.updateViewwindow} key={idx} val={val}></Button>)
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
}
