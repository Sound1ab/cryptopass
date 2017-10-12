import React, {Component} from 'react';
import {connect} from 'react-redux';
import CryptoJS from 'crypto-js';
import { CSSTransitionGroup } from 'react-transition-group'

import Title from '../../components/title/title';
import Inputs from '../../components/inputs/inputs';
import Modal from '../../components/modal/modal'

import {updateMessage, updateKey} from '../../reduxconfig/actions/inputaction';
import {updatePassword, copyPassword, revealPassword} from '../../reduxconfig/actions/passwordaction';

class Home extends Component {
	constructor() {
		super();

		this.symbols = ['!', '@', '>', '~', '%', '^', '&', '*', '/'];

		this.handleChange = this.handleChange.bind(this);
		this.handleEncryption = this.handleEncryption.bind(this);
		this.copyPasswordToClipboard = this.copyPasswordToClipboard.bind(this);
		this.revealPassword = this.revealPassword.bind(this);
	}

	handleChange = (e) => {
		if (e.target.getAttribute('data-value') === 'message') {
			this.props.dispatch(updateMessage(e.target.value));
		} else if (e.target.getAttribute('data-value') === 'encryptionKey') {
			this.props.dispatch(updateKey(e.target.value));
		}
	}

	handleEncryption = (e) => {
		e.preventDefault();
		let password = CryptoJS.PBKDF2(
			this.props.message,
			this.props.encryptionKey,
			{keySize: 128 / 50}
		).toString();
		let search = password.search(/\d/);
		password = `${password}${this.symbols[search]}`.split('');
		let nth = 2;
		for (let i = nth - 1; i < password.length - 1; i += nth) {
			password[i] = password[i].toUpperCase();
		}
		// this.props.dispatch(updatePassword(password.join("")));
		this.copyPasswordToClipboard(password.join(""));
	}

	copyPasswordToClipboard = (password) => {
		this.props.dispatch(copyPassword());
		setTimeout(() => {
			this.props.dispatch(copyPassword());
		}, 1200)

        let textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
	}

	revealPassword = () => {
		this.props.dispatch(revealPassword());
	}

	render() {
		return (
			<div className="page-container">
				<CSSTransitionGroup
					transitionName="glide-in"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}>
                	{this.props.copyPassword ? <Modal/> : null}
				</CSSTransitionGroup>
				<Title/>
				<Inputs handleChange={this.handleChange} handleEncryption={this.handleEncryption}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		message: state.input.message,
		encryptionKey: state.input.encryptionKey,
		password: state.password.password,
		copyPassword: state.password.copyPassword,
		revealPassword: state.password.revealPassword,
		menuState: state.menu.menuState,
	}
}

export default connect(
	mapStateToProps
)(Home);