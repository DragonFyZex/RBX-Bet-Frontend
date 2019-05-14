import React, { useState } from 'react'
import './SendMessage.css'

export default ({sendMessage}) => {
    const [message, setMessage] = useState("");
    return ( 
        <div className = "sidebarSendContainer">
            <input placeholder = "Message..." value = {message} onChange = {(e) => setMessage(e.target.value)} 
                onKeyPress = {(e) => {
                    if (e.key === "Enter") {
                        sendMessage(message)
                        setMessage("")
                    }
                }} />
            <p onClick = {() => {sendMessage(message); setMessage("")}}>SEND</p>
        </div>
    )
}