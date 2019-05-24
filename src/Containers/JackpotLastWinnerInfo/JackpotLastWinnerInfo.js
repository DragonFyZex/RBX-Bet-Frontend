import React, {useState} from 'react'

import './JackpotLastWinnerInfo.css'

export default ({lastRound}) => {
    const [username, setUsername] = useState("CHANGEME")
    const [lastWinner, setLastWinner] = useState("CHANGEME")


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