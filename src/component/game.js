import React,{Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import ImageStructure from './images.js';
//import Timer from './time.js';

class GamePage extends Component {
	constructor(props) {
		super(props);
		this.state = {show: ">byyy"};
		this.update=()=>{
			this.setState({show: "hiiiiiiiiii"});

		}
	};

	render() {
		return <div className="start" >
			<div id="gameArea1" ref="gameArea1">
				<a onClick={this.update}>Refresh</a>

				<div className="common" >
				{this.state.show}
				 <ImageStructure/>
				</div>
			</div>
		</div>

	}
}
export default GamePage;
