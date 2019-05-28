import React, {useState, useEffect} from 'react'
import './JackpotCountdownTimer.css'

export default ({timeEnd = -1}) => {
        const [timeLeft, setTimeLeft] = useState(0);

        useEffect(() => {
                const interval = setInterval( () => {
                        setTimeLeft(timeEnd - Date.now() / 1000)
                }, 1000) 

                return () => clearInterval(interval)
        })

        return (
                <div className="jackpotGameCountdownContainer">
                        <div className="countdownTimeContainer">
                                <p style={{marginTop: "3%", marginBottom: "3%"}}>{timeLeft < 0 && timeEnd != -1 ? "00" : timeEnd === -1 ? "03" : ("0" + Math.floor(timeLeft / 60)).slice(-2)}</p>
                        </div>
        
                        <div style={{height: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                                <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>:</p>
                        </div>
                        <div className="countdownTimeContainer">
                                <p style={{marginTop: "3%", marginBottom: "3%"}}>{timeEnd === -1 || timeLeft < 0 ? "00" : ("0" + Math.floor(timeLeft % 60)).slice(-2)}</p>
                        </div>
                </div>
        )
    
}