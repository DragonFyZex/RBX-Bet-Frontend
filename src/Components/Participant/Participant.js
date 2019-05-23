import React from 'react'
import './Participant.css'

export default ({User, GamesWon}) => (
    <div className = "participantContainer">
        <img src = {require('../../Assets/images/avatar.png')} alt="" className="userInfoImage"/>
        {/* <div className = "userInfoContainer">
            <p className = "userInfoUsername">{User}</p>
            <p className = "gamesWonText">{GamesWon} Games Won</p>
        </div> */}
    </div>
)