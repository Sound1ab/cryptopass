import React, {Component} from 'react';

import {toggleMenu} from '../../reduxconfig/actions/menuaction';

import '../../assets/scss/App.css';

import { svg } from '../../assets/svg/inlinesvgs';

const menu = svg({
	className: 'svgIcon',
	fill: '#FFF',
	size: 20,
	icon: 'burger',
});

export default class Header extends Component {

    handleClick = () => {
        this.props.dispatch(toggleMenu())
    }

    render() {
        return (
            <div className="header">
                <div onClick={this.handleClick} className="menu">{menu}</div>
            </div>
        )
    }
}