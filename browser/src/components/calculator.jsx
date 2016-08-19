import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Viewwindow from './view_window';

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttons: [
				"AC",
				"+/-",
				"%",
				"÷",
				7,
				8,
				9,
				"x",
				4,
				5,
				6,
				"-",
				1,
				2,
				3,
				"+",
				"00",
				0,
				".",
				"="
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
				<div className="numbers">
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
			this.state.num1 !== null
				? accum = "" + this.state.num1
				: accum = this.state.tempview

			if (!accum.match(/-/)) {
				accum = "-" + accum;
			} else {
				accum = accum.split("-")
				accum.splice(0, 1)
				accum = accum.join("")
			}
			this.setState({
				tempview: accum,
				num1: + accum
			})
		}
		if (typeof input === "number" || input === "." || input === "00") {
			if (!this.state.op) {
				accum = this.state.tempview + input;
				console.log(accum)
				num1 = +accum;
				this.setState({tempview: accum, num1: num1})
			} else {
				accum = "" + input;
				this.setState({tempview: accum, num2: input})
			}
		} else if (input.match(/[x\+\-\÷\%]/) !== null && input !== "+/-") {
			num1 = this.state.num1;
			accum = num1;
			if (!this.state.op) {
				op = input;
				this.setState({num1: num1, op: op})
			} else {
				let stateUpdate = this.runCalc(input);
				accum = stateUpdate.num1;
				this.setState(stateUpdate);
			}
		}
		if (input === "=") {
			let stateUpdate = this.runCalc();
			accum = stateUpdate.num1;
			this.setState(stateUpdate);
		}
		if (input === "AC") {
			accum = "0";
			this.setState({tempview: "", num1: null, num2: null, op: null});
		}

		this.props.updateViewwindow(accum);

	}
	runCalc(input) {
		let op = this.state.op;
		let num1 = +this.state.num1;
		let num2 = +this.state.num2;
		let accum;
		if (op === "+")
			accum = num1 + num2;
		if (op === "-")
			accum = num1 - num2;
		if (op === "x")
			accum = num1 * num2;
		if (op === "÷")
			accum = num1 / num2;
		if (op === "%")
			accum = num1 % num2;
		op = input
			? input
			: null

		return {tempview: "", num1: accum, num2: null, op: op};
	}
}
