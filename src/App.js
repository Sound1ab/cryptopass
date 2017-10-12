import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/header/header';
import PopoutMenu from './components/header/menu';

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children && React.cloneElement(this.props.children, {
					test: 'test'
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		menuState: state.menu.menuState,
	}
}

export default connect(
	mapStateToProps
)(App);
