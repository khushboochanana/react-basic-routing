import React,{Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
class Timer extends Component {
	constructor() {
		super();
		console.log("??????????????////")
		console.log("?????/",this)
		this.state = {
			elapsed: 0
		}
		this.timer=0

	}
	componentDidMount() {
		console.log(">>>.mounttt")
		this.timer = setInterval(this.tick, 50);
	}
	componentWillUnmount() {
		this.timer = setInterval(this.tick, 50);
	}

	tick() {
		this.setState({elapsed: Date.now() - this.props.start});

	}
	render() {
		console.log("this.state.elapsed0",this.state.elapsed)
		var elapsed = Math.round(this.state.elapsed / 100);
console.log(this.props.start,">>??>??",Date.now(),"?????????????????////")

		var seconds = (elapsed / 10).toFixed(1);
		return <p>This example was started <b>{seconds} seconds</b> ago.</p>;

	}
}
export default Timer;

