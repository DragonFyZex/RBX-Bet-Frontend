import React, { useState } from 'react'

import './JackpotGame.css'
import JackpotProgressBar from '../../Components/JackpotProgressBar/JackpotProgressBar';

export default () => {


    return (

        <div className = "jackpotGameContainer">
            <div className = "jackpotGameInfoContainer">
                <p style={{fontFamily: "Basic", fontSize: "1em", alignSelf: "flex-start", marginLeft: "2.2em", color: "white"}}>Game #TEST</p>
                <div className = "jackpotGameCountdown">
                    <JackpotProgressBar />
                    <div style={{lineHeight: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                        <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>or</p>
                    </div>
                    <div className = "jackpotGameCountdownContainer">
                        <div className = "countdownTimeContainer">
                            <p style={{marginTop: "3%", marginBottom: "3%"}}>00</p>
                        </div>
                        
                        <div style={{height: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                            <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>:</p>
                        </div>
                        <div className = "countdownTimeContainer">
                        <p style={{marginTop: "3%", marginBottom: "3%"}}>35</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className = "jackpotDepositContainer">

            </div>
            <div className = "jackpotItemsContainer">

            </div>
            <div className = "jackpotRoundInfoContainer">

            </div>
            
        </div>
    )
}