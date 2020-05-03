import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		this.state = {
			die1: 'one',
			die2: 'one',
			isRolling: false
		};
		this.roll = this.roll.bind(this);
	}

	roll(e) {
		let newValue1 = this.props.sides[Math.floor(Math.random() * 6)];
		let newValue2 = this.props.sides[Math.floor(Math.random() * 6)];

		this.setState({
			die1: newValue1,
			die2: newValue2,
			isRolling: true
		});
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 1000);
	}

	render() {
		return (
			<div className='RollDice'>
				<div className='RollDice-container'>
					<Die num={this.state.die1} isRolling={this.state.isRolling} />
					<Die num={this.state.die2} isRolling={this.state.isRolling} />
				</div>
				<button onClick={this.roll} disabled={this.state.isRolling}>
					{this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice;
