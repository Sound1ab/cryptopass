// Dependencies
import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Inputs extends React.Component {
	constructor() {
		super();
		this.password = '';
		this.state= {
			showPassword: false
		}
	}

	handleClick = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	render() {
		let {showModal, handleChange, password} = this.props;
		let {showPassword} = this.state;
		return (
			<div className="inputs">
				<form onSubmit={showModal}>
					<div className="input-holder-outer">
						<div className="input-holder-inner">
							<input autoFocus autoCapitalize="none" placeholder="passphrase" data-value="message" type="text"
							   onChange={handleChange}/>
						</div>
					</div>
					<div className="input-holder-outer">
						<div className="input-holder-inner">
							<input placeholder="key" data-value="encryptionKey" type={showPassword ? 'text' : 'password'}
								   onChange={handleChange}/>
							<div onClick={this.handleClick} className="show-password">
								<img className="password-icon" src={require(`../../assets/images/${showPassword ? 'view' : 'hide'}.png`)} />
							</div>
						</div>

					</div>
					<div className="input-holder-outer">
						<div className="input-holder-button">
							<CopyToClipboard text={password}>
								<button type="submit">Generate</button>
							</CopyToClipboard>
						</div>
					</div>
				</form>
			</div>
		)
	}
}