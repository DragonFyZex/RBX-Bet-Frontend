import React from 'react'
import './SidebarActions.css'

export default ({action, doAction}) => (
    <div className = "sidebarActionsContainer">
        <p onClick={() => doAction()}>{action}</p>
    </div>
)