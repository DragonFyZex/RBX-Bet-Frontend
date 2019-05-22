import React from 'react'

import './Main.css'
import Jackpot from '../Jackpot/Jackpot'

export default () => {
    return (
        <div style = {{display: 'flex', flexDirection: "column", flexGrow: 1}}>
            <div className = "mainContainer">
                <Jackpot />
                <div className = "infoContainer">

                </div>
                
            </div>
            <p style = {{marginTop: "auto", fontFamily: "Fira Sans", color: "white"}}> RBX.BET is not affiliated with Roblox Corporation </p>
        </div>
    )
}