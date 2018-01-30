import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup';
import {
	Route,
	Redirect
} from 'react-router-dom'


export default class App extends Component {
	state = {
		redirectToReferrer: false,
		referrer: '/'
	};

	getFaculty() {
		return [
			{name: "Второго высшего образования и магистерской подготовки", key: 10004},
			{name: "Заочного обучения", key: 9},
			{name: "Общественного питания и товароведения", key: 10},
			{name: "Отдел аспирантуры", key: 12},
			{name: "Подготовительный факультет", key: 14},
			{name: "СПО - заочная форма", key: 10045},
			{name: "Среднего профессионального образования", key: 1},
			{name: "Среднего профессионального образования №1", key: 10083},
			{name: "Среднего профессионального образования №2", key: 10084},
			{name: "Таможенного дела и информационных технологий", key: 7},
			{name: "Учебно-методический центр", key: 10046},
			{name: "Учебно-методический центр повышения квалификации и переподготовки кадров", key: 15},
			{name: "Экономики и менеджмента", key: 11},
			{name: "Юридический", key: 8}];
	}

	getSpeciality() {
		const queryParams = new URLSearchParams(this.props.location.search);
		let id = queryParams.get('id');
		console.log('getSpeciality id = ' + id);
		return [
			{name: "Информационные системы (по отраслям)", key: 1370},
			{name: "Организация и технология защиты информации", key: 1411},
			{name: "Право и организация социального обеспечения", key: 1394},
			{name: "Прикладная информатика (по отраслям)", key: 1363},
			{name: "Технология продукции общественного питания", key: 1423},
			{name: "Товароведение и экспертиза качества потребительских товаров", key: 1434}
		];
	}

	selectSpeciality = (id) => {
		this.props.history.push({
			pathname: 'speciality',
			search: '?id='+id
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
					   render={(props) => (<ButtonGroup data={this.getFaculty()}
														onclick={this.selectSpeciality}/>)}/>
				<Route exact path="/speciality"
					   render={(props) => (<ButtonGroup data={this.getSpeciality()}
														onclick={this.selectSpeciality}/>)}/>
			</div>
		);
	}
}


