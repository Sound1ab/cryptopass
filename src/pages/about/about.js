import React from 'react';
import {connect} from 'react-redux';

import Title from '../../components/title/title';
import StaggeredMount from '../../components/animation/staggeredmount';


class About extends React.Component {

    static propTypes = {

    }
    render () {
	    let content = [
            <Title/>,
	    ];

        return (
            <div className="page-container">
                <StaggeredMount content={content}>
                </StaggeredMount>
	            <div>hey dudes</div>
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
)(About);