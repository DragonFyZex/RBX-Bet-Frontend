import React, { useState } from 'react'

import './Jackpot.css'
import JackpotGame from '../JackpotGame/JackpotGame';
import JackpotHistory from '../JackpotHistory/JackpotHistory';

export default ({data}) => {
    const [screen, changeScreen] = useState("jackpot");
    const inProgress = data != false ? data.inProgress : false
    const roundInfo = data != false ? data.roundInfo : {round: undefined, completed: 0, roundInfo: [], numberOfTickets: 0, timeStarted: -1, hash: ""}

    return (
        <div className = "jackpotContainer">
            <div className="screen">
                <p className="screenText" onClick={() => changeScreen("jackpot")} style={{color: screen === "jackpot" ? "#3ACAD3" : "white"}}>Jackpot</p>
                <p className="screenText" onClick={() => changeScreen("history")} style={{color: screen === "history" ? "#3ACAD3" : "white"}}>History</p>
            </div>
            
            {screen == "jackpot" ? <JackpotGame inProgress = {inProgress} roundInfo = {roundInfo} /> : <JackpotHistory />}
            
        </div>
    )
}