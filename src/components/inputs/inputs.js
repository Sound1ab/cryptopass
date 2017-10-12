// Dependencies
import React from 'react';

import styles from '../../assets/scss/App.scss';

const Inputs = ({ handleEncryption, handleChange }) => {
    Inputs.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
	    <div className="inputs">
		    <form onSubmit={handleEncryption}>
			    <div className="input-holder">
				    <input autoFocus autoCapitalize="none" placeholder="passphrase" data-value="message" type="text"
				           onChange={handleChange}/>
			    </div>
			    <div className="input-holder">
				    <input placeholder="key" data-value="encryptionKey" type="password"
				           onChange={handleChange}/>
			    </div>
			    <div className="input-holder">
			        <button type="submit">Generate</button>
			    </div>
		    </form>
	    </div>
    );
};

export default Inputs;