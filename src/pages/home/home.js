import React, {Component} from 'react';
import {connect} from 'react-redux';
import CryptoJS from 'crypto-js';
import { CSSTransitionGroup } from 'react-transition-group';


import Title from '../../components/title/title';
import Inputs from '../../components/inputs/inputs';
import Modal from '../../components/modal/modal'

import {updatePassword, copyPassword} from '../../reduxconfig/actions/passwordaction';

class Home extends Component {
	constructor() {
		super();

		this.symbols = ['!', '@', '>', '~', '%', '^', '&', '*', '/'];

		this.handleChange = this.handleChange.bind(this);
		this.handleEncryption = this.handleEncryption.bind(this);
	}

	handleChange = (e) => {
		if (!this.handleChange.message) {
			this.handleChange.message = '';
		}
        if (!this.handleChange.key) {
            this.handleChange.key = '';
        }
		if (e.target.getAttribute('data-value') === 'message') {
			this.handleChange.message = e.target.value;
		} else if (e.target.getAttribute('data-value') === 'encryptionKey') {
            this.handleChange.key = e.target.value;
		}
		this.handleEncryption(this.handleChange.message, this.handleChange.key);
	}

	handleEncryption = (message, key) => {
		let password = CryptoJS.PBKDF2(
			message,
			key,
			{keySize: 128 / 50}
		).toString();
		let search = password.search(/\d/);
		password = `${password}${this.symbols[search]}`.split('');
		let nth = 2;
		for (let i = nth - 1; i < password.length - 1; i += nth) {
			password[i] = password[i].toUpperCase();
		}
		this.props.dispatch(updatePassword(password.join("")));
	}

	showModal = (e) => {
        e.preventDefault();
        this.props.dispatch(copyPassword());
        setTimeout(() => {
            this.props.dispatch(copyPassword());
        }, 1200)
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
				<Inputs showModal={this.showModal} handleChange={this.handleChange} password={this.props.password}/>
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