import React from 'react';

import './dice-game.styles.css';

const DiceGame = ({playerWon,computerWon,draw}) => (
	<div className='dice-game'>
		<div className={playerWon>computerWon?'winner':'losser'}>
			<h4>you Won: {playerWon}</h4>
		</div>
		<div className={draw?'draw':'hidden'}>
			<h4>Draw: {draw}</h4>
		</div>
		<div className={playerWon<computerWon?'winner':'losser'}>
			<h4>Computer Won: {computerWon}</h4>
		</div>
	</div>
)

export default DiceGame;