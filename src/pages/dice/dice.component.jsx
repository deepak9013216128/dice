import  React from 'react';

import './dice.styles.css';

import DiceGame from '../../component/dice-game/dice-game.component';
import Die from '../../component/die/die.component';
import RollingDie from '../../component/rolling-die/rolling-die.component';

class Dice extends React.Component {
	
	constructor(porps) {
		super(porps)
		this.state = {
			roll:['one','two','three','four','five','six'],
			die1:0,
			die2:0,
			playerWon:0,
			computerWon:0,
			draw:0,
			shake:false
		}
	}
	shaking = () =>{
		this.setState({
			shake:false
		})
	}
	handleClear = () => {
		this.setState(()=>({
			die1:0,
			die2:0,
			playerWon:0,
			computerWon:0,
			draw:0
		}))
	}
	handleCompare = ()=>{
		const {roll} = this.state;
		
		const idx1 = Math.floor(Math.random()*roll.length)
		const idx2 = Math.floor(Math.random()*roll.length)

		let winner = idx1 >idx2 
					? "playerWon" 
					: idx1 === idx2 ?"draw":"computerWon";
		
		this.setState({
			shake:true
		},()=>{
			setTimeout(()=>{
				this.setState({
					die1:idx1,
					die2:idx2,
					[winner]: this.state[winner]+1
				})
			},1000)
		})
	}

	render(){
		const {
			die1,
			die2,
			roll,
			draw,
			shake,
			playerWon,
			computerWon,}=this.state;
		return (
			<div className='dice'>
				<div className='title'>
					<h1>Die Game!!!</h1>
				</div>
				<DiceGame 
					draw={draw}
					playerWon={playerWon} 
					computerWon={computerWon} 
				/>
				<div className='dies'>
					<Die 
						num={roll[die1]}
						shake={shake}
						shaking={this.shaking}
					/>
					<Die 
						num={roll[die2]}
						shake={shake}
						shaking={this.shaking}
					/>
				</div>
				<RollingDie 
					handleCompare={this.handleCompare}
					handleClear = {this.handleClear}
				/>
			</div>
		)
	}
}

export default Dice;

