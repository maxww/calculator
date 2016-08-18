import React from "react";
import {render} from "react-dom";

export default class Viewwindow extends React.Component {
	render() {
		return (
			<div className="viewWindow">{this.props.viewwindow}</div>
		)
	}
}
