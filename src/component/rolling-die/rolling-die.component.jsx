import React from 'react';

import './rolling-die.styles.css';

import CustomButton from '../custom-button/custom-button.component';

const RollingDie = ({handleCompare,handleClear}) =>(
	<div className='rolling-die'>
		<CustomButton name='rolling' handleCompare={handleCompare}/>
		<CustomButton name='clear' handleClear={handleClear}/>
	</div>
)
export default RollingDie;