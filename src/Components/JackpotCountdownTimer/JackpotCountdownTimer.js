import React, {useState} from 'react'
import './JackpotCountdownTimer.css'

export default ({timeEnd = -1}) => {
        const [timeLeft, setTimeLeft] = useState(0);
        setInterval( () => {
                setTimeLeft(timeEnd - Date.now() / 1000)
        }, 1000)
        
        return (
                <div className="jackpotGameCountdownContainer">
                        <div className="countdownTimeContainer">
                                <p style={{marginTop: "3%", marginBottom: "3%"}}>{timeEnd === -1 || timeLeft < 0 ? "00" : ("0" + Math.floor(timeLeft / 60)).slice(-2)}</p>
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