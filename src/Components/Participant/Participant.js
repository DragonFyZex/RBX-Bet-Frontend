import React from 'react'
import './Participant.css'

export default ({userImage = 1, username = "Roblox", percentage=44.4, color = "#FF0000"}) => (
    <div className = "participantContainer" style={{backgroundColor: `${color + "50"}`}}>
        <img src = {`https://www.roblox.com/headshot-thumbnail/image?userId=${userImage}&width=420&height=420&format=png`} alt="" className="userInfoImage"/>
        <p className = "participantUsername">{username}</p>
        <p className = "participantPercentage">{percentage.toPrecision(3)}%</p>
        {/* <div className = "userInfoContainer">
            <p className = "userInfoUsername">{User}</p>
            <p className = "gamesWonText">{GamesWon} Games Won</p>
        </div> */}
    </div>
)