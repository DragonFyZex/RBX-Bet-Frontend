import React from 'react'

import './Main.css'
import Jackpot from '../Jackpot/Jackpot'
import JackpotLastWinnerInfo from '../JackpotLastWinnerInfo/JackpotLastWinnerInfo';
import JackpotParticipants from '../JackpotParticipants/JackpotParticipants';
import io from 'socket.io-client';
import { isMobile } from 'mobile-device-detect';


export default class extends React.Component {

    state = {
        response: false,
    }

    componentDidMount = () => {
        const socket = io('http://localhost:5000');
        socket.on("getRound", data => this.setState({response: data}));
        
    }


    render() {
        return (
            <div style = {{display: 'flex', flexDirection: "column", flexGrow: 1}}>
                <div className = "mainContainer">
                    <Jackpot data = {this.state.response}/>
                    {!isMobile ?
                     <div className = "infoContainer">
                        <JackpotLastWinnerInfo lastRound = {this.state.response ? this.state.response.lastRoundInfo : {}} />
                        <JackpotParticipants data = {this.state.response}/>
                     </div> : 
                     null
                    }
                   
                    
                </div>
                <p style = {{marginTop: "auto", marginBottom: '0.5%', fontFamily: "Fira Sans", color: "white"}}> RBX.BET is not affiliated with Roblox Corporation </p>
            </div>
        )
    }
    
}