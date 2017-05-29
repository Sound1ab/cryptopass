import React, {Component} from 'react';

import '../../App.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">Cryptopass</div>
                <div className="menu">Menu</div>
            </div>
        )
    }
}