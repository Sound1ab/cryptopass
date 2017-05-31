import React from 'react';

import { TransitionMotion, spring } from 'react-motion';

class StaggeredMount extends React.Component {
	constructor(props) {
		super(props);

		this.custom = {
			stiffness: 20,
			damping: 40
		}

	}

	willEnter() {
		return {
			opacity: 0,
			translateY: 100,
		}
	}

	willLeave() {
		return {
			opacity: spring(0),
			translateY: spring(0),
		}
	}

	getStyles = (prevStyles = []) => {

		if (!prevStyles || prevStyles.length === 0) {
			// reverse because the last item should lead the staggering.
			return this.props.content.map((element, index) => ({
				key: index,
				style: {opacity: spring(0), translateY: spring(100)}
			}))
		}

		return prevStyles.map((element, index, array) => {
			let destinationY;
			let destinationOpac;
			if (index === 0) {
				destinationOpac = 1;
				destinationY = 0;
			} else {
				const itemBefore = array[index - 1];
				destinationY = itemBefore.style.translateY;
				destinationOpac = itemBefore.style.opacity;
			}

			return {
				key: index,
				style: {opacity: spring(destinationOpac), translateY: spring(destinationY)}
			}
		});
	}

	render() {
		return (
			<TransitionMotion
				willEnter={this.willEnter}
				willLeave={this.willLeave}
				styles={prev => this.getStyles(prev)}
			>
				{interpolatedStyle =>
					<div>
						{interpolatedStyle.map((config, index) => {
							return (
								this.props.content.length > 0 ? <div
									key={config.key}
									style={{
										opacity: config.style.opacity,
										transform: `translateY(${config.style.translateY}px)`
									}}
								>
									{React.cloneElement(this.props.content[index])}
								</div> : null
							)
						})}
					</div>
				}
			</TransitionMotion>
		)

	}
}

StaggeredMount.propTypes = {

	// Required
	content: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.array
	]).isRequired,

};

export default StaggeredMount;


