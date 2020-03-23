import React from 'react';

import './custom-button.styles.css';

class CustomButton extends React.Component {
	constructor(props){
		super(props);
		this.state={
			rolling:false
		}
	}
	handleClick = ()=>{
		if(!this.state.rolling){
			this.props.handleCompare();
			this.setState({
				rolling: true
				})
			setTimeout(()=>{
				this.setState({rolling:false})
			},1000)
			
		}
	}
	render() {
		return (
			<button 
			className='rolling'
			onClick={this.handleClick}
			>
				{
					this.state.rolling? 'Rolling...':'Roll It'
				}
			</button>
		)
	}
}

export default CustomButton;