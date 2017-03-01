import React,{Component} from 'react';
import {Link} from 'react-router'
class PlayPage extends Component {
	render() {
		return (
				<div className="play">
					<div>
						<div className="common">
							<Link to={"/rule"}>
								<img style={{width: 100, height: 100}} src={require("./../assets/images/letPlay.png")} />
							</Link>
						</div>
					</div>
				</div>
		);
	}
}

export default PlayPage;

