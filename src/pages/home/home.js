import React, {Component} from 'react';
import {connect} from 'react-redux';
import CryptoJS from 'crypto-js';
import Header from '../../components/header/header';

import {updateMessage, updateKey, updatePassword} from '../../reduxconfig/actions/inputaction';

class Home extends Component {

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

        this.props.dispatch(updatePassword(password));
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="inputs">
                        <form onSubmit={this.handleEncryption}>
                            <input placeholder="passphrase" data-value="message" type="text"
                                   onChange={this.handleChange}/>
                        </form>

                        <form onSubmit={this.handleEncryption}>
                            <input placeholder="key" data-value="encryptionKey" type="password"
                                   onChange={this.handleChange}/>
                        </form>
                    {this.props.password ? this.props.password : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.input.message,
        encryptionKey: state.input.encryptionKey,
        password: state.input.password,
    }
}

export default connect(
    mapStateToProps
)(Home);