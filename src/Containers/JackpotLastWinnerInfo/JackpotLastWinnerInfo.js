import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './JackpotLastWinnerInfo.css'

export default ({lastRound = {winner: "none", numberOfTickets: 0, percentage: 0}}) => {
    const [username, setUsername] = useState("NONE")
    
    useEffect(() => {
        (async () => {
            const usernameRequest = await axios.get(`https://yacdn.org/proxy/https://api.roblox.com/users/${lastRound.winner}`).catch("Error")
            setUsername(usernameRequest.data.Username)
        })()
    })

    return (
        <div className = "lastWinnerContainer">
            <div className = "jackpotLastWinnerTop">
                LAST WINNER
            </div>
            <div className = "jackpotLastWinnerUserContainer">
                <div className = "jackpotLastWinnerUserCircle">
                    <div className = "jackpotLastWinnerUserBackground" style = {{backgroundImage: `url("https://www.roblox.com/headshot-thumbnail/image?userId=${lastRound.winner}&width=420&height=420&format=png")`}}/>
                </div>
                <p className="jackpotLastWinnerName">{username}</p>
            </div>
            <div className = "jackpotLastWinnerBot">
                <p>WIN: R${lastRound.numberOfTickets}</p>
                <p>Chance: {(lastRound.percentage * 100).toFixed(2) }%</p>
            </div>
        </div>
    )
}