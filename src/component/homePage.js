import React, {Component} from 'react';
require('./../assets/css/style.css');
import {Link} from 'react-router'
import HomePageExampleModalButton from './appMoadl.js';
class HomePage extends Component {
	constructor() {
		super()
	}

	render() {
		return (
				<div>
					<div className="content">
						<HomePageExampleModalButton className="header-link"/>
						<div className="common">
							<Link to={"/play"}>
								<img style={{width: 100, height: 100}} src={require("./../assets/images/wave.gif")} />
							</Link>
						</div>
					</div>
				</div>
		);
	}
}

export default HomePage;