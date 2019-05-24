import React from 'react'

import './JackpotParticipants.css'
import Participant from '../../Components/Participant/Participant';

export default ({data}) => {
    
    const items = data ? data.roundInfo.roundInfo : [];
    // gets all the users
    const users = [];
    items.map(item => {
        if (users.findIndex(user => user.userId == item.userId) == -1) {
            users.push({userId: item.userId, worth: 0})
        } 

        const index = users.findIndex(user => user.userId == item.userId);
        users[index].worth = users[index].worth + item.limitedValue
    })
    const sortedUsers = users.sort((a, b) => b.worth - a.worth)
    console.log(sortedUsers)
    return (
        <div className = "participantsContainer">
            <div className = "jackpotParticipantsTop">
                PARTICIPANTS
            </div>
           
            <div className = "jackpotParticipantsList">     
                {
                    sortedUsers.map(user => <Participant userId = {user.userId} username = "CHANGEME" color = "#F44123" percentage = {Number(user.worth / data.roundInfo.numberOfTickets) * 100} />)
                }
                
            </div>

            <div className = "jackpotParticipantsBot" />
        </div>
    )
}