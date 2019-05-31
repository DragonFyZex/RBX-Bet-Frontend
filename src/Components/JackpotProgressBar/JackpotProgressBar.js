import React from 'react'
import './JackpotProgressBar.css'

export default ({numItems}) => (
    
        <div className = "jackpotGameCountdownItems">
            <div className = "jackpotGameCountdownFiller" style={{width: numItems / 15 * 100 + "%"}}/>
            <div className = "jackpotGameCountdownFillerInfoContainer">
                    <p className="jackpotGameCountdownFillerInfoBig">{numItems}/15</p>
                    <p className="jackpotGameCountdownFillerInfoSmall">Items</p>
            </div>  
        </div>

)