import React, {Component} from 'react';
import {connect} from 'react-redux';
import CryptoJS from 'crypto-js';

import Header from '../../components/header/header';
import Title from '../../components/title/title';
import Inputs from '../../components/inputs/inputs';
import Password from '../../components/password/password';
import StaggeredMount from '../../components/animation/staggeredmount';

import {updateMessage, updateKey} from '../../reduxconfig/actions/inputaction';
import {updatePassword, copyPassword, revealPassword} from '../../reduxconfig/actions/passwordaction';

class Home extends Component {
	constructor() {
		super();

		this.symbols = ['!', '@', '£', '$', '%', '^', '&', '*', '/'];

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
			{keySize: 128 / 64}
		).toString();

		let search = password.search(/\d/);

		console.log(search);

		password = `${password}${this.symbols[search]}`.split('');

		let nth = 2;
		for (let i = nth - 1; i < password.length - 1; i += nth) {
			password[i] = password[i].toUpperCase();
		}


		this.props.dispatch(updatePassword(password.join("")));
	}

	copyPasswordToClipboard = () => {
		this.props.dispatch(copyPassword());
		setTimeout(() => {
			this.props.dispatch(copyPassword());
		}, 500)
	}

	revealPassword = () => {
		this.props.dispatch(revealPassword());
	}

	render() {
		let content = [
			<Header dispatch={this.props.dispatch}/>,
			<Title/>,
			<Inputs handleChange={this.handleChange} handleEncryption={this.handleEncryption}/>,
		]

		let password = [<Password
			password={this.props.password}
			copyPasswordToClipboardCallback={this.copyPasswordToClipboard}
			revealPasswordCallback={this.revealPassword}
			copyPassword={this.props.copyPassword}
			revealPassword={this.props.revealPassword}
		/>]
		return (
			<div className="page-container">
				<StaggeredMount content={content}>
				</StaggeredMount>
				{this.props.password ? <StaggeredMount content={password}>
				</StaggeredMount> : null}
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
	}
}

export default connect(
	mapStateToProps
)(Home);