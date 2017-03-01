import React,{Component} from 'react';
import {Link} from 'react-router'
class RulePage extends Component {
	constructor(){
		super()
	}
	render() {
		return (
				<div className="play">
					<div>
						<div className="common">Just find odd man out and wins the game
							<spam className="rule">	RULES </spam>
							<Link to={"/continue"} className="continue">
								Continue
							</Link>
						</div>
					</div>
				</div>
		);
	}
}

export default RulePage;

