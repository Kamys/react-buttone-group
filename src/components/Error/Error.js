import React, {Component} from 'react';

export default class Error extends Component {
	render() {
		let errorText = "Ошибка!";
		if(this.props.errorText){
			errorText = this.props.errorText;
		}
		return (
			<div>
				<h1>{errorText}</h1>
			</div>
		);
	}
}


