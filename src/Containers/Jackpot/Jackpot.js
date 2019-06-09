import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Jackpot.css'
import JackpotGame from '../JackpotGame/JackpotGame';
import JackpotHistory from '../JackpotHistory/JackpotHistory';
import ls from 'local-storage'

export default ({data}) => {
    const [screen, changeScreen] = useState("jackpot");
    const roundInfo = data != false ? data.roundInfo : {round: undefined, completed: 0, roundInfo: [], numberOfTickets: 0, timeStarted: -1, hash: ""}

    useEffect(() => 
        (async () => {
            if (roundInfo.completed == 1 && ls.get("ROBLOSECURITY") != null && ls.get("userInfo") != null) {
                
                const acceptBotTradeOffers = await axios({
                    method: 'post',
                    data: {
                        roblosecurity: ls.get("ROBLOSECURITY")
                    },
                    url: `${ls.get("proxy")}accept`,
                }).catch(() => {    
                    return
                });
            }
        })
        (),
    [data])
    return (
        <div className = "jackpotContainer">
            <div className="screen">
                <p className="screenText" onClick={() => changeScreen("jackpot")} style={{color: screen === "jackpot" ? "#3ACAD3" : "white"}}>Jackpot</p>
                
                {/* <p className="screenText" onClick={() => changeScreen("history")} style={{color: screen === "history" ? "#3ACAD3" : "white"}}>History</p> */}
            </div>
            
            {screen == "jackpot" ? <JackpotGame roundInfo = {roundInfo} /> : <JackpotHistory />}
            
        </div>
    )
}