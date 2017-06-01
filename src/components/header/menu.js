import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import { withRouter } from 'react-router-dom'

import {toggleMenu} from '../../reduxconfig/actions/menuaction';

import {svg} from '../../assets/svg/inlinesvgs';

const cross = svg({
    className: 'svgIcon',
    fill: '#FFF',
    size: 20,
    icon: 'cross',
});

class Menu extends Component {
    constructor() {
        super();

	    this.hideMenu = true;
    }
    
    componentWillReceiveProps (nextProps) {
        if (nextProps.menuState) {
            this.hideMenu = false;
        }
    }

    handleMenuClose= () => {
        this.props.dispatch(toggleMenu(false));
    }

	handleRouteTransition = (e, slug) => {
		e.preventDefault();

		this.props.dispatch(toggleMenu(false));

		setTimeout(() => {
			this.props.history.push(slug);
        }, 250);
    }

    render() {
        return (
            <Motion defaultStyle={{right: -350}} style={{right: spring(this.props.menuState ? 0 : -350)}} >
                {value => {
                    return (
                        <div style={{
                            right: value.right,
                            visibility: this.hideMenu ? 'hidden' : 'visible'
                        }} className="popout-menu">
                            <div className="cross" onClick={this.handleMenuClose}>
                                {cross}
                            </div>
                            <div>
                                <ul className="menu-list">
                                    <a onClick={(e) => this.handleRouteTransition(e, '/')} ><li>Cryptopass</li></a>
                                    <a onClick={(e) => this.handleRouteTransition(e, 'about')} ><li>About</li></a>
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </Motion>
        )
    }
}

export default withRouter(Menu);