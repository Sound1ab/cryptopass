import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './components/header/header';
import PopoutMenu from './components/header/menu';

class App extends Component {
	render() {
		return (
			<div>
				<Header dispatch={this.props.dispatch}/>
				<PopoutMenu menuState={this.props.menuState} dispatch={this.props.dispatch}/>
				{this.props.children && React.cloneElement(this.props.children, {

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
