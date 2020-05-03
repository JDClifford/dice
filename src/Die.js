import React, { Component } from 'react';
import './die.css';

class Die extends Component {
	render() {
		let faClassName = 'Die fas fa-dice-' + this.props.num;
		return <i className={`${faClassName} ${this.props.isRolling ? 'Die-Rolling' : ''}`} />;
	}
}

export default Die;
