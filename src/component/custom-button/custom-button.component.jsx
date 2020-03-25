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
		const buttonText =  this.props.name==='rolling'
						    ? this.state.rolling? 'Rolling...':'Roll It'
						    : 'Clear';
		return (
			<button 
				className='rolling'
				onClick={this.props.name==='rolling'?this.handleClick:this.props.handleClear}
			>
			{
				buttonText
			}
			</button>
		)
	}
}

export default CustomButton;