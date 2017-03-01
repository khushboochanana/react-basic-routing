//import 'babel-polyfill';
import React from 'react'
import {render}  from 'react-dom'
import App from './component/app.js'
import {Router,browserHistory} from 'react-router';
import routes from './routes.js'
import {Provider} from 'react-redux';


render(	<Provider>
			<Router routes={routes}  history={browserHistory}/>
		</Provider>, document.getElementById("app")
);