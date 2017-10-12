import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CSSTransitionGroup } from 'react-transition-group'

import styles from '../../assets/scss/App.scss';

import {svg} from '../../assets/svg/inlinesvgs';

const tick = svg({
	className: 'svgIcon',
	fill: '#00ff11',
	size: 20,
	icon: 'tick',
});

const Password = ({password, copyPasswordToClipboardCallback, revealPasswordCallback, copyPassword, revealPassword}) => {
	Password.propTypes = {
		password: React.PropTypes.string.isRequired
	};
	if (password) {
		this.hiddenPassword = revealPassword ? password : password.replace(/./g, '*');
	}
	return (
		<div>
			<div className="password">
				<span>
					<h2 className="password__title">{this.hiddenPassword}</h2>
					<CSSTransitionGroup
						transitionName="example"
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={1000}>
					{copyPassword ? tick : null}
					</CSSTransitionGroup>
				</span>
				<div className="buttons">
					<CopyToClipboard
						text={password}
						onCopy={copyPasswordToClipboardCallback}>
						<button>Copy</button>
					</CopyToClipboard>
					<button onClick={revealPasswordCallback}>Reveal</button>
				</div>
			</div>
		</div>
	);
};

export default Password;