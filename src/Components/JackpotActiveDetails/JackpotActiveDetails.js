import React, {useState} from 'react'
import './JackpotActiveDetails.css'

export default ({winningTicket, winner, totalPot}) => {

        return (
                <div className="jackpotActiveContainer">
                	<div className="jackpotActiveWinningContainer">
						<p className = "jackpotActiveWinningLabel">Winning Ticket:</p>
						<p className ="jackpotActiveWinningTicket">???</p>
					</div>
					<div className="jackpotActiveWinningContainer">
						<p className = "jackpotActiveWinningLabel">Winner:</p>
						<p className = "jackpotActiveWinner">???</p>
					</div>

					<div className="jackpotActiveValueContainer">
						<p>R$2131293</p>
					</div>

					
                </div>
        )
    
}