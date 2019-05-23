import React from 'react'

import './Main.css'
import Jackpot from '../Jackpot/Jackpot'
import JackpotLastWinnerInfo from '../JackpotLastWinnerInfo/JackpotLastWinnerInfo';
import JackpotParticipants from '../JackpotParticipants/JackpotParticipants';

export default () => {
    return (
        <div style = {{display: 'flex', flexDirection: "column", flexGrow: 1}}>
            <div className = "mainContainer">
                <Jackpot />
                <div className = "infoContainer">
                    <JackpotLastWinnerInfo />
                    <JackpotParticipants />
                </div>
                
            </div>
            <p style = {{marginTop: "auto", fontFamily: "Fira Sans", color: "white"}}> RBX.BET is not affiliated with Roblox Corporation </p>
        </div>
    )
}