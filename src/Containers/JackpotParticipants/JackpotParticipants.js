import React from 'react'

import './JackpotParticipants.css'

export default ({participants}) => {

    return (
        <div className = "participantsContainer">
            <div className = "jackpotParticipantsTop">
                PARTICIPANTS
            </div>
           
            <div className = "jackpotParticipantsList"></div>

            <div className = "jackpotParticipantsBot" />
        </div>
    )
}