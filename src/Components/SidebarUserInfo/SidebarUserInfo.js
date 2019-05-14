import React from 'react'
import './SidebarUserInfo.css'

export default ({User, GamesWon}) => (
    <div className = "sideBarUserContainer">
        <img src = {require('../../Assets/images/avatar.png')} alt="" className="userInfoImage"/>
        <div className = "userInfoContainer">
            <p className = "userInfoUsername">{User}</p>
            <p className = "gamesWonText">{GamesWon} Games Won</p>
        </div>
    </div>
)