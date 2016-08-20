import React from "react";
import {render} from "react-dom";

export default class Viewwindow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isAnswering: false
		}
	}

	render() {
		return (
			<div className="view-window" >
				<span>{this.props.viewwindow}</span>
			</div>
		)
	}
}
