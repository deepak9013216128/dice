import  React from 'react';

import './die.styles.css'

class Die extends React.Component {
	handleShake = () =>{
		setTimeout(()=>{
			this.props.shaking()
		},1000);
	}
	render(){
		const {shake,num}= this.props;
		let isShake = '';
		if(shake){
			isShake = 'shaking';
			this.handleShake();
		}
		
		return (
				<i className={`die fas fa-dice-${num} ${isShake}`}></i>
		)
	}
}

export default Die;

