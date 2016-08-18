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
			tempview: "",
			num1: null,
			num2: null,
			op: null
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
		let accum;
		let num1;
		let num2;
		let op;
		if (input === "+/-") {
			accum = this.state.tempview;
			console.log(accum);

			if (!accum.match(/-/)) {
				accum = "-" + accum;
			} else {
				accum = accum.split("-")
				accum.splice(0, 1)
				accum = accum.join("")
			}
			this.setState({tempview: accum})
		}
		if (typeof input === "number" || input === ".") {
			accum = this.state.tempview + input;
			this.setState({tempview: accum})
		} else if (input.match(/[\+\-\*\/]/) !== null && input !== "+/-") {
			accum = this.state.tempview + input;
			num1 = this.state.tempview;
			op = input;
			this.setState({tempview: accum, num1: num1, op: op})
		}
		if (input === "=") {
			op = this.state.op;
			num1 = +this.state.num1;
			num2 = +this.state.tempview.split(op)[1];
			if (op === "+")
				accum = num1 + num2;
			if (op === "-")
				accum = num1 - num2;
			if (op === "*")
				accum = num1 * num2;
			if (op === "/")
				accum = num1 / num2;
			if (op === "%")
				accum = num1 % num2;
			this.setState({tempview: "", num1: accum, num2: null, op: null});
		}
		if (input === "AC") {
			accum = "0";
			this.setState({tempview: "", num1: null, num2: null, op: null});
		}

		this.props.updateViewwindow(accum);

	}
}
