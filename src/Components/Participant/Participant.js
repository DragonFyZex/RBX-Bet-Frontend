import React, {useState, useEffect} from 'react'
import './Participant.css'
import axios from 'axios'

export default ({userId = 1, percentage=44.4, color = "#FF0000"}) => {
    const [username, setUsername] = useState("ERROR");
    useEffect(() => {
        (async () => {
            const usernameRequest = await axios.get(`https://yacdn.org/proxy/https://api.roblox.com/users/${userId}`).catch("Error")
            setUsername(usernameRequest.data.Username)
        })()
    }, [])
    return (
        <div className = "participantContainer" style={{backgroundColor: `${color + "50"}`}}>
            <img src = {`https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`} alt="" className="userInfoImage"/>
            <p className = "participantUsername">{username}</p>
            <p className = "participantPercentage">{percentage.toPrecision(3)}%</p>
        </div>
    )
}