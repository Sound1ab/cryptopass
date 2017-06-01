import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

import {toggleMenu} from '../../reduxconfig/actions/menuaction';

import {svg} from '../../assets/svg/inlinesvgs';

const cross = svg({
    className: 'svgIcon',
    fill: '#FFF',
    size: 20,
    icon: 'cross',
});

class Menu extends Component {

    handleClick = () => {
        this.props.dispatch(toggleMenu());
    }

    render() {
        return (
            <Motion defaultStyle={{right: -350}} style={{right: spring(this.props.menuState ? 0 : -350)}}>
                {value => {
                    return (
                        <div style={value} className="popout-menu">
                            <div className="cross" onClick={this.handleClick}>
                                {cross}
                            </div>
                            <div>
                                <ul className="menu-list">
                                    <li>Cryptopass</li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </Motion>
        )
    }
}

export default Menu;