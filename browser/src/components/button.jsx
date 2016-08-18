import React from 'react';
import {render} from 'react-dom';

export default class Button extends React.Component {

	render() {
		return (
			<button className="buttons" onClick={this.onClickButton.bind(this)}>{this.props.val}</button>
		)
	}

	onClickButton(event) {
		event.preventDefault();
		const input = this.props.val;
		this.props.updateTempView(input)
	}
}
