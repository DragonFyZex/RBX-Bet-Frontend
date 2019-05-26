import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './JackpotLastWinnerInfo.css'

export default ({lastRound}) => {
    const [username, setUsername] = useState("ERROR")
    const [lastWinner, setLastWinner] = useState("ERROR")
    
    console.log(lastRound == undefined)
    // if (lastRound.winner == undefined) {
    //     setLastWinner(lastRound.winner)
    // }
    
    useEffect(() => {
        (async () => {
            const usernameRequest = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.roblox.com/users/${lastRound.winner}`).catch("Error")
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
                    <div className = "jackpotLastWinnerUserBackground" style = {{backgroundImage: `url("https://www.roblox.com/headshot-thumbnail/image?userId=${lastWinner}&width=420&height=420&format=png")`}}/>
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