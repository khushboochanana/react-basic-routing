import React,{Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
class ImageStructure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			update: true
		};
		this.getImages = (className)=> {
			let indents = [];
			let sets = createSet();
			let random = generateRandom(4);
			var top=getRandomInt(180,628);
			var left=getRandomInt(528,800)
			let set = sets[random];
			indents.push(<a onClick={this.testImage.bind(this, set["odd"], random,className)}>
				<img className={className} id="odd" ref='odd' style={{top: top + 'px',left:left+'px'}} src={require('./../assets/images/shapes/' + set["odd"] + '.png')}/>
			</a>);

			for (let i = 0; i < 5; i++) {
				 top=getRandomInt(180,628);
				left=getRandomInt(528,800)

				indents.push(<a onClick={this.testImage.bind(this, set["main1"], random)}>
					<img  className="playImage" id={"main"+i} style={{top: top + 'px',left:left+'px'}}   ref='main1' src={require('./../assets/images/shapes/' + set["main1"] + '.png')}/>
				</a>);
			}
			for (let i = 0; i < 5; i++) {
				 top=getRandomInt(180,628);
				left=getRandomInt(528,800);
				indents.push(<a onClick={this.testImage.bind(this, set["main2"], random)}>
					<img className="playImage" style={{top: top + 'px',left:left+'px'}} id={"second"+i} ref='main2' src={require('./../assets/images/shapes/' + set["main2"] + '.png')}/>
				</a>);
			}

			return indents;

		};
	};
	testImage(set, i,className) {
		if ("odd" + (i + 1) == set) {
			this.setState({
				oddClass: "playImage", update: true
			})
		}
		else {
			className="playImage active"
		}

	}
	render() {
let className="playImage";

		var indents = this.getImages(className);
		return <div >
				  {
						  indents
						  }
		</div>
	}
}

export default ImageStructure;


function createSet() {
	let sets = [];
	for (let i = 1; i < 6; i++) {
		let obj = {};
		obj = {main1: "shape" + i, main2: "shape" + (i + 1), odd: "odd" + i};
		sets.push(obj)
	}
	return sets;
};

function generateRandom(n) {
	return Math.floor(Math.random() * n) + 1;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}