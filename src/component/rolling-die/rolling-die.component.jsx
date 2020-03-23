import React from 'react';

import './rolling-die.styles.css';

import CustomButton from '../custom-button/custom-button.component';

class RollingDie extends React.Component {
	constructor(props){
		super(props)
			this.state={

			}
		}
	render(){
		return (
			<div>
				<CustomButton handleCompare={this.props.handleCompare}/>
			</div>
		)
	}
}
export default RollingDie;