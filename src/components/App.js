import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup';

export default class App extends Component {
    render() {
        let dataBtn = [];

        dataBtn.push({name: "Второго высшего образования и магистерской подготовки", key: 10004});
        dataBtn.push({name: "Заочного обучения", key: 9});
        dataBtn.push({name: "Общественного питания и товароведения", key: 10});
        dataBtn.push({name: "Отдел аспирантуры", key: 12});
        dataBtn.push({name: "Подготовительный факультет", key: 14});
        dataBtn.push({name: "СПО - заочная форма", key: 10045});
        dataBtn.push({name: "Среднего профессионального образования", key: 1});
        dataBtn.push({name: "Среднего профессионального образования №1", key: 10083});
        dataBtn.push({name: "Среднего профессионального образования №2", key: 10084});
        dataBtn.push({name: "Таможенного дела и информационных технологий", key: 7});
        dataBtn.push({name: "Учебно-методический центр", key: 10046});
        dataBtn.push({name: "Учебно-методический центр повышения квалификации и переподготовки кадров", key: 15});
        dataBtn.push({name: "Экономики и менеджмента", key: 11});
        dataBtn.push({name: "Юридический", key: 8});
        return (<ButtonGroup data={dataBtn} onclick={function (key) {
            console.log("btn key = " + key);
        }}/>);
    }
}
