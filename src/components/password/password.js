import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

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
			{this.hiddenPassword ?
				<div className="password">
					<span>
						<h2>{this.hiddenPassword}</h2>{copyPassword ? tick : null}
					</span>
					<div className="buttons">
						<CopyToClipboard text={password}
						                 onCopy={copyPasswordToClipboardCallback}>
							<button>Copy</button>
						</CopyToClipboard>
						<button onClick={revealPasswordCallback}>Reveal</button>
					</div>
				</div>
				: null}
		</div>
	);
};

export default Password;