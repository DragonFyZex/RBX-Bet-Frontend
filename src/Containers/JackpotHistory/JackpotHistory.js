import React, { useState } from 'react'

import './JackpotHistory.css'

export default () => {
    const [screen, changeScreen] = useState("jackpot");
    console.log(screen)
    return (
        <div className = "jackpotContainer">
            <div className="screen">
                <p className="screenText" onClick={() => changeScreen("jackpot")} style={{color: screen === "jackpot" ? "#3ACAD3" : "white"}}>Jackpot</p>
                <p className="screenText" onClick={() => changeScreen("history")} style={{color: screen === "history" ? "#3ACAD3" : "white"}}>History</p>
            </div>
            
        </div>
    )
}