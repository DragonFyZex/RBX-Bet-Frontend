import React from 'react'
import './JackpotProgressBar.css'

export default ({numItems}) => (
    
        <div className = "jackpotGameCountdownItems">
            <div className = "jackpotGameCountdownFiller" style={{width: numItems / 25 * 100 + "%"}}/>
            <div className = "jackpotGameCountdownFillerInfoContainer">
                    <p className="jackpotGameCountdownFillerInfoBig">{numItems}/25</p>
                    <p className="jackpotGameCountdownFillerInfoSmall">Items</p>
            </div>  
        </div>

)