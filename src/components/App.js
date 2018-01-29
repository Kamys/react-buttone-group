import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'


export default class App extends Component {
    render() {
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

        function selectSpeciality(id) {
            this.props.history.push('/speciality/:' + id);
        }

        return (
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/"
                               render={(props) => (<ButtonGroup data={getFaculty()} onclick={selectSpeciality}/>)}/>
                        <Route path={`speciality/:id`} component={ButtonGroup}/>
                    </Switch>
            </BrowserRouter>
        );
    }
}

{/*
<Router>
    <div>
        <Route exact path="/"
               render={(props) => (<ButtonGroup data={getFaculty()} onclick={selectSpeciality}/>)}/>
        <Route exact path="/speciality:id"
               render={(props) => (<ButtonGroup data={getSpeciality(props.route.id)}
                                                onclick={selectSpeciality}/>)}/>
    </div>
</Router>
*/
}
