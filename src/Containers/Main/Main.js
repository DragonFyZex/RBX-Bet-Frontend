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
        const socket = io('https://api.rbx.bet', {
            transports: ['websocket', 'polling'] 
        });
        socket.on("getRound", data => this.setState({response: data}));
      
    }


    render() {
        console.log(this.state.response)
        return (
            <div style = {{display: 'flex', flexDirection: "column", flexGrow: 1, height: '87%'}}>
                <div className = "mainContainer">
                    <Jackpot data = {this.state.response}/>
                    {!isMobile ?
                     <div className = "infoContainer">
                        <JackpotLastWinnerInfo lastRound = {this.state.response ? this.state.response.lastRoundInfo : {winner: "none", numberOfTickets: 0, winningStats:{winnerPercentage: 0}}} />
                        <JackpotParticipants data = {this.state.response}/>
                     </div> : 
                     null
                    }
                   
                    
                </div>
            </div>
        )
    }
    
}