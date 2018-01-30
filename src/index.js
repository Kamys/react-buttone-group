import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory"

const history = createHistory();
ReactDOM.render(
	<Router history={history}>
		<div>
			<Route path="/" component={App}/>
		</div>
	</Router>, document.getElementById('root'));
registerServiceWorker();
