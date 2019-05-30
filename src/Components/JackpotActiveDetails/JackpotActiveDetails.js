import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './JackpotActiveDetails.css'

export default ({winningTicket = "", winner = "", percentage = "", totalPot}) => {

	const [username, setUsername] = useState("NONE")
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		if (currentTime > 10) return
		const interval = setInterval( () => {
			setCurrentTime(currentTime + 1)
		}, 1000) 
	
		return () => clearInterval(interval)
	})

    useEffect(() => {
        (async () => {
            const usernameRequest = await axios.get(`https://yacdn.org/proxy/https://api.roblox.com/users/${winner}`).catch("Error")
            setUsername(usernameRequest.data.Username)
        })()
    })	

        return (
                
				<div className="jackpotActiveContainer">
					<div className="jackpotActiveWinningContainer">
						<p className = "jackpotActiveWinningLabel">Percentage:</p>
						<p className = "jackpotActiveWinner">{currentTime >= 9 ? percentage : "???"}</p>
					</div>
                	<div className="jackpotActiveWinningContainer">
						<p className = "jackpotActiveWinningLabel">Winning Ticket:</p>
						<p className ="jackpotActiveWinningTicket">{currentTime >= 9 ? winningTicket : "???"}</p>
					</div>
					<div className="jackpotActiveWinningContainer">
						<p className = "jackpotActiveWinningLabel">Winner:</p>
						<p className = "jackpotActiveWinner">{currentTime >= 9 ? username : "???"}</p>
					</div>


					<div className="jackpotActiveValueContainer">
						<p>R${totalPot}</p>
					</div>

					
                </div>
        )
    
}