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
                <Participant userImage = {744043354} username = "Gamer2031" color = "#F44123" percentage = {44.2} />
                <Participant userImage = {680712473} username = "Gamer624" color = "#b96932" percentage = {38.2} />
                <Participant userImage = {71490184} username = "Hacker 93" color = "#f16b87" percentage = {21.2} />
                <Participant userImage = {293666280} username = "Gamer234" color = "#07a6b5" percentage = {15.2} />
                <Participant userImage = {276719241} username = "Moderater_Kidfury" color = "#586646" percentage = {12.2} />
            </div>

            <div className = "jackpotParticipantsBot" />
        </div>
    )
}