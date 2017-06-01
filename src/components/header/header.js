import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

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
	constructor() {
		super();
		this.state = {
			startAnimation: false
		}
	}

    handleClick = () => {
        this.props.dispatch(toggleMenu())
    }



    render() {
    	setTimeout(() => {
		    this.setState({
			    startAnimation: true
		    })
	    }, 1000);
        return (
            <div className="header">
	            <Motion defaultStyle={{marginRight: -100}} style={{marginRight: spring(this.state.startAnimation ? 20 : -100)}}>
		            {interpolatingValue => {
		            	return (
				            <div style={interpolatingValue} onClick={this.handleClick} className="menu">{menu}</div>
			            )
		            }}
	            </Motion>
            </div>
        )
    }
}