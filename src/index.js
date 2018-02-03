import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import SelectDataManager from "./components/SelectDataManager/SelectDataManager";

const history = createHistory();
ReactDOM.render(
	<Router history={history}>
		<div>
			<Route path="/select/" component={SelectDataManager}/>
		</div>
	</Router>, document.getElementById('root'));
registerServiceWorker();
