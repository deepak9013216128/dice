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
	handleShake = () =>{
		this.setState({
			shake:false
		})
	}
	handleCompare = ()=>{
		const {roll} = this.state;
		let winner;
		const idx1 = Math.floor(Math.random()*this.state.roll.length)
		const idx2 = Math.floor(Math.random()*this.state.roll.length)
		if(idx1 >idx2){
			winner = "playerWon";
		}else if(idx1 === idx2){
			winner = "draw";
		}else{
			winner = "computerWon";
		}
		this.setState({
			// die1:idx1,
			// die2:idx2,
			// [winner]: this.state[winner]+1,
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
						handleShake={this.handleShake}
					/>
					<Die 
						num={roll[die2]}
						shake={shake}
						handleShake={this.handleShake}
					/>
				</div>
				<RollingDie handleCompare={this.handleCompare}/>
			</div>
		)
	}
}

export default Dice;

