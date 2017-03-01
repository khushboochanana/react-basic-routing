import React,{Component} from 'react';
import {Link} from 'react-router'
require('./../assets/css/style.css');
import HomePageExampleModalButton from './appMoadl.js';
import PlayPage from './playPage.js';
import Home from './homePage.js';

class App extends Component {
	constructor(){
		super();
		this.state={
			showMe:false
		};
		this.onClick = this.onClick.bind(this)
	}
	onClick() {
		this.setState({ showMe : true} );
	}
	render() {
		let data = null;
		if (this.state.showMe) {
			data = <PlayPage/>;
		} else {
			data = <Home showMe={this.state.showMe} />;
		}
		return (<div className="container" >
			<h1>Keep ur Eyes ON</h1>
			<div>
			   {
				 this.props.children ? this.props.children : data
			   }
			</div>
		</div>
		);
	}
}
export default App;
