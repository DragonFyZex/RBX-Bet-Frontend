import React from 'react'

import './Main.css'
import Jackpot from '../Jackpot/Jackpot'
import JackpotLastWinnerInfo from '../JackpotLastWinnerInfo/JackpotLastWinnerInfo';
import JackpotParticipants from '../JackpotParticipants/JackpotParticipants';
import io from 'socket.io-client';


export default class extends React.Component {

    state = {
        response: false,
    }

    componentDidMount = () => {
        const socket = io('http://localhost:5000');
        socket.on("getRound", data => console.log(data));

    }



    render() {
        return (
            <div style = {{display: 'flex', flexDirection: "column", flexGrow: 1}}>
                <div className = "mainContainer">
                    <Jackpot />
                    <div className = "infoContainer">
                        <JackpotLastWinnerInfo />
                        <JackpotParticipants />
                    </div>
                    
                </div>
                <p style = {{marginTop: "auto", fontFamily: "Fira Sans", color: "white"}}> RBX.BET is not affiliated with Roblox Corporation </p>
            </div>
        )
    }
    
}