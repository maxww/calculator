import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Viewwindow from './view_window';

export default class Calculator extends React.Component {
	renderButtons() {
		return this.props.buttons.map((val, idx) => <Button updateViewwindow={this.props.updateViewwindow} key={idx} val={val}></Button>)
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
