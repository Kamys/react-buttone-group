import React, {Component} from 'react';
import Error from "../Error/Error";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

/**
 * Defines the data type by search parameters in the url and shows the relevant data.
 */
export default class SelectDataManager extends Component {
    /**
     * Data types which can display.
     * @type {{faculty: {id: number, label: string, data: *, nameIdParameter: string, onSelect: *}, specialty: {id: number, label: string, data: *, nameIdParameter: string, onSelect: *}, course: {id: number, label: string, data: *, nameIdParameter: string, onSelect: *}, group: {id: number, label: string, data: *, nameIdParameter: string, onSelect: *}, groupLesson: string}}
     */
    typeSelectData = {
        faculty: {
            id: 1,
            label: 'Факультет',
            data: getFaculty(),
            nameIdParameter: 'facultyId',
            onSelect: this.selectNextData('facultyId')
        },
        specialty: {
            id: 2,
            label: 'Специальность',
            data: getSpeciality(),
            nameIdParameter: 'specialtyId',
            onSelect: this.selectNextData('specialtyId')
        },
        course: {
            id: 3,
            label: 'Курс',
            data: getCourse(),
            nameIdParameter: 'specialtyId',
            onSelect: this.selectNextData('specialtyId')
        },
        group: {
            id: 4,
            label: 'Группы',
            data: getGroup(),
            nameIdParameter: 'specialtyId',
            onSelect: this.selectNextData('specialtyId')
        },
        groupLesson: "GroupLesson",
    };

    render() {
        let selectData = this.defineDataBySearchParams();
        if (!selectData) {
            return <Error errorText={"Неправильно переданы параметры!"}/>
        }
        return (
            <ButtonGroup history={this.props.history}
                         name={selectData.label}
                         data={selectData.data}
                         onclick={selectData.onSelect}/>
        );
    }


    /**
     * Define type select data by search parameters
     * @returns {* || null} null if failed define.
     */
    defineDataBySearchParams() {
        let searchParameter = this.getAllSearchParameter();
        let countParameters = Array.from(searchParameter).length;

        if (countParameters === 0) {
            return this.typeSelectData.faculty;
        }

        const facultyIdValue = searchParameter.get(this.typeSelectData.faculty.nameIdParameter);
        if (countParameters === 1 && facultyIdValue) {
            return this.typeSelectData.specialty;
        }
        const specialtyIdValue = searchParameter.get(this.typeSelectData.specialty.nameIdParameter);
        if (countParameters === 2 && facultyIdValue && specialtyIdValue) {
            return this.typeSelectData.course;
        }
        const courseIdValue = searchParameter.get(this.typeSelectData.course.nameIdParameter);
        if (countParameters === 3 && facultyIdValue && specialtyIdValue && courseIdValue) {
            return this.typeSelectData.group;
        }
        return null;
    }

    /**
     *
     * @returns {URLSearchParams}
     */
    getAllSearchParameter = () => {
        return new URLSearchParams(this.props.location.search);
    };

    /**
     * Used for select next data.
     * For select next data need id's name and value. This function create onClick handler with id's name.
     * Remain only call created onClick and give id's value.
     * @param idParameterName id's name.
     * @returns {function(*=)} onClick handler which need give id's value.
     */
    selectNextData(idParameterName) {
        return (idParameterValue) => {
            let urlSearchParams = this.getAllSearchParameter();
            urlSearchParams.append(idParameterName, idParameterValue);
            this.props.history.push({
                search: '?' + urlSearchParams.toString()
            })
        }
    }

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

function getGroup() {
    return [
        {name: "Группа 1", key: 1},
        {name: "Группа 2", key: 2},
        {name: "Группа 3", key: 3}
    ];
}
