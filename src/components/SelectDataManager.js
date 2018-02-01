import React, {Component} from 'react';
import Error from "./Error";
import ButtonGroup from "./ButtonGroup";

/**
 * Defines the data type by search parameters in the url and shows the relevant data.
 */
export default class SelectDataManager extends Component {
	/**
	 * Data types which can display.
	 * @type {{faculty: string, specialty: string, course: string, group: string, groupLesson: string}}
	 */
	static typeSelectDataEnum = {
		faculty: "Faculty",
		specialty: "Specialty",
		course: "Course",
		group: "Group",
		groupLesson: "GroupLesson",
	};

	state = {
		currentSelect: SelectDataManager.typeSelectDataEnum.faculty
	};

	searchJSON = '';

	render() {
		let searchJSON = SelectDataManager.searchToJSON(this.props.location.search);
		let typeSelectData = SelectDataManager.defineTypeSelectData(searchJSON);
		if(!typeSelectData){
			return <Error errorText={"Неправильно переданы параметры!"}/>
		}
		let selectData = this.takeSelectDataByType(typeSelectData);
		return (
			<ButtonGroup history={this.props.history}
						 name={selectData.label}
						 data={selectData.data}
						 onclick={selectData.onSelect}/>
		);
	}

	/**
	 * Convert search parameters in JSON
	 * @param search
	 * @returns {{facultyId: string, specialtyId: string, courseId: string, groupId: string, groupLessonId: string}}
	 */
	static searchToJSON(search) {
		search = SelectDataManager.deleteQuestionMark(search);

		return JSON.parse(`{"${decodeURI(search)
			.replace(/"/g, '\\"')
			.replace(/&/g, '","')
			.replace(/=/g, '":"') }"}`);
	};

	/**
	 * Delete question mark
	 * @param search
	 * @returns {*}
	 */
	static deleteQuestionMark(search) {
		if (search[0] === '?') {
			search = search.slice(1);
		}
		return search;
	}

	/**
	 * Define type select data by search parameters.
	 * @param searchJSON {{facultyId: string, specialtyId: string, courseId: string, groupId: string, groupLessonId: string}}
	 * @returns {string || null} null if failed define.
	 */
	static defineTypeSelectData(searchJSON) {
		let countParameters = Object.keys(searchJSON).length;

		if(countParameters === 0){
			return SelectDataManager.typeSelectDataEnum.faculty;
		}

		if(countParameters === 1 && searchJSON.facultyId){
			return SelectDataManager.typeSelectDataEnum.specialty;
		}
		return null;
	}

	takeSelectDataByType(typeSelectData) {
		switch (typeSelectData){
			case SelectDataManager.typeSelectDataEnum.faculty:
				return {label: 'Факультет', data:getFaculty(),  onSelect: this.onSelectFaculty};
			case SelectDataManager.typeSelectDataEnum.specialty:
				return {label: 'Специальность', data:getSpeciality(),  onSelect: this.onSelectSpecialty};
		}
	}

	getSearchParameter = (name) =>{
		const queryParams = new URLSearchParams(this.props.location.search);
		return queryParams.get(name);
	};

	onSelectFaculty = (facultyId) => {
		let search = encodeURIComponent(JSON.stringify({
			facultyId: facultyId
		}));
		debugger;
		this.props.history.push({
			search: '?' + search
		})
	};

	onSelectSpecialty = (specialtyId) => {
		let search = encodeURIComponent(JSON.stringify({
			facultyId: this.searchJSON.facultyId,
			specialtyId: specialtyId
		}));
		debugger;
		this.props.history.push({
			search: '?' + search
		})
	};

}

function getFaculty() {
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

function getSpeciality() {
	return [
		{name: "Информационные системы (по отраслям)", key: 1370},
		{name: "Организация и технология защиты информации", key: 1411},
		{name: "Право и организация социального обеспечения", key: 1394},
		{name: "Прикладная информатика (по отраслям)", key: 1363},
		{name: "Технология продукции общественного питания", key: 1423},
		{name: "Товароведение и экспертиза качества потребительских товаров", key: 1434}
	];
}

function getCourse() {
	return [
		{name: "Курс 1", key: 1},
		{name: "Курс 2", key: 2},
		{name: "Курс 3", key: 3}
	];
}
