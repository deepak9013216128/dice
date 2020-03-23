import  React from 'react';

import './die.styles.css'

class Die extends React.Component {
	render(){
		const {shake,num,handleShake}= this.props;
		if(shake){
			setTimeout(()=>{
				handleShake()
			},1000);
			
		}
		return (
				<i className={`die fas fa-dice-${num} ${shake?'shaking':''}`}></i>
		)
	}
}

export default Die;

