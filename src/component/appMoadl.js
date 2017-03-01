import React,{Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ReactSpinner from 'react-spinjs';

export default
class HomePageExampleModalButton extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		}
		this.openModal = () => {
			this.setState({showModal: true});
		}
		this.closeModal = () => {
			this.setState({showModal: false});
		}
	}

	componentDidMount() {
		this.openModal()
	}

	render() {
		return <a className={this.props.className} onClick={this.openModal}>
      {this.state.showModal ?
		      <FirstModal onClose={this.closeModal}/>
		      : null}
		</a>;
	}
}

class FirstModal extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <ModalContainer onClose={this.props.onClose}>
			<ModalDialog onClose={this.props.onClose} className="example-dialog">

			Hiiii Can u find me
				<img style={{width: 100, height: 100}} src={require("./../assets/images/wave.gif")} />

				<p>If u can then lets Start after fiding me click on me.....!</p>
			</ModalDialog>
		</ModalContainer>;
	}
}
