import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup';
import {
	Route,
	Redirect
} from 'react-router-dom'

let TypeSelectDataEnum = Object.freeze({
	"Faculty": 1,
	"Specialty": 2,
	"Courses": 3,
	"Group": 4,
	"GroupLesson": 5,
});

export default class App extends Component {
	state = {
		redirectToReferrer: false,
		referrer: '/',
		currentSelect: TypeSelectDataEnum.Faculty
	};



	selectSpeciality = (id) => {
		this.props.history.push({
			pathname: '/speciality',
			search: '?id=' + id
		})
	};

	selectCourse = (id) => {
		this.props.history.push({
			pathname: '/course',
			search: '?id=' + id
		})
	};


	render() {

		if (this.state.redirectToReferrer) {
			this.state.redirectToReferrer = false;
			return (
				<Redirect to={this.state.referrer}/>
			)
		}

		return (
			<div>
				<Route exact path="/"
					   render={(props) => (<ButtonGroup name='Факульты' data={this.getFaculty()}
														onclick={this.selectSpeciality}/>)}/>
				<Route exact path="/speciality"
					   render={(props) => (<ButtonGroup name='Специальности' data={this.getSpeciality()}
														onclick={this.selectCourse}/>)}/>
				<Route exact path="/course"
					   render={(props) => (<ButtonGroup name='Курс' data={this.getCourse()}
														onclick={this.selectCourse}/>)}/>
			</div>
		);
	}
}


