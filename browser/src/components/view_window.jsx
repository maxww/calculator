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
			<div className="view-window" onClick={this.onAnswerClick.bind(this)}>
				{this.renderViewWindow()}
			</div>
		)
	}

	renderViewWindow(){
		if (this.state.isAnswering){
			return (
				<form onSubmit={this.onAnswerUpdateViewWindow()}>
					<input type="text" ref="answerInput"/>
				</form>
			)
		}

		return (
			<span>{this.props.viewwindow}</span>
		)
	}

	onAnswerClick(){
		this.setState({isAnswering: true});
	}

	onAnswerUpdateViewWindow(){
		event.preventDefault();
		if (this.refs.answerInput){
			const answer = this.refs.answerInput.value;
			this.props.updateViewwindow(answer);
			this.setState({isAnswering: false})
		}
	}
}
