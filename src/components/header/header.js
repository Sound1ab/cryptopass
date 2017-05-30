import React, {Component} from 'react';

import '../../assets/scss/App.css';

import { svg } from '../../assets/svg/inlinesvgs';

const menu = svg({
	className: 'svgIcon',
	fill: '#FFF',
	size: 20,
	icon: 'burger',
});

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="menu">{menu}</div>
            </div>
        )
    }
}