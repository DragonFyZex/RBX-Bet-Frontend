import React from 'react'

import './JackpotParticipants.css'
import Participant from '../../Components/Participant/Participant';

export default ({participants}) => {

    return (
        <div className = "participantsContainer">
            <div className = "jackpotParticipantsTop">
                PARTICIPANTS
            </div>
           
            <div className = "jackpotParticipantsList">
                <Participant />
            </div>

            <div className = "jackpotParticipantsBot" />
        </div>
    )
}