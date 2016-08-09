import React from 'react';
import {render} from 'react-dom';

export default class Button extends React.Component {

	render() {
		return (
			<button onClick={this.onClickButton.bind(this)}>{this.props.val}</button>
		)
	}

	onClickButton(event) {
		event.preventDefault();
		const input = this.props.val;
		console.log(this)
		this.props.updateTempView(input)
	}
}
