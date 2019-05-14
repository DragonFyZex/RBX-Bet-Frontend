import React from 'react'
import './SidebarChoices.css'

export default ({currentSidebarOption, setSidebarOption}) => (
    <div className = "choicesContainer">
        <p style = {{color: currentSidebarOption === "chat" ? "#3ACAD3" : "#FFFFFF"}} onClick={() => setSidebarOption("chat")}>Chat</p>
        <p style = {{color: currentSidebarOption === "missing" ? "#3ACAD3" : "#FFFFFF"}} onClick={() => setSidebarOption("missing")}>Missing Items</p>
    </div>
)