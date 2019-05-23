import React from 'react'

import './JackpotLastWinnerInfo.css'

export default ({lastWinner = 93666280}) => {

    return (
        <div className = "lastWinnerContainer">
            <div className = "jackpotLastWinnerTop">
                LAST WINNER
            </div>
            <div className = "jackpotLastWinnerUserContainer">
                <div className = "jackpotLastWinnerUserCircle">
                    <div className = "jackpotLastWinnerUserBackground" style = {{backgroundImage: `url("https://www.roblox.com/headshot-thumbnail/image?userId=${lastWinner}&width=420&height=420&format=png")`}}/>
                </div>
                <p className="jackpotLastWinnerName">ROBLOXIAN2023</p>
            </div>
            <div className = "jackpotLastWinnerBot">
                <p>WIN: R$2019</p>
                <p>Chance: 19.63%</p>
            </div>
        </div>
    )
}