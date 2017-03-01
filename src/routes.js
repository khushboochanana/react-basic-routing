import React from 'react';
import {Route,IndexRoute} from 'react-router'
import App from './component/app.js';
import HomePage from './component/homePage.js';
import PlayPage from './component/playPage.js';
import RulePage from './component/rule.js';
import GamePage from './component/game.js';

export default (
		<Route path="/" component={App}>
			<Route path="play" component={PlayPage} />
			<Route path="rule" component={RulePage} />
			<Route path="continue" component={GamePage} />
		</Route>
)