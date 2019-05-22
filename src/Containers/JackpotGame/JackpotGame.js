import React, { useState } from 'react'

import './JackpotGame.css'
import JackpotProgressBar from '../../Components/JackpotProgressBar/JackpotProgressBar';
import Banner from '../../Assets/images/Banner'
import Chevron from '../../Assets/images/Chevron'
import windowSize from 'react-window-size'
import JackpotItem from '../../Components/JackpotItem/JackpotItem';

const JackpotGame = ({windowWidth, windowHeight}) => {

    return (

        <div className = "jackpotGameContainer">
            <div className = "jackpotGameInfoContainer">
                <p style={{fontFamily: "Basic", fontSize: "1em", alignSelf: "flex-start", marginLeft: "2.2em", color: "white"}}>Game #TEST</p>
                <div className = "jackpotGameCountdown">
                    <JackpotProgressBar />
                    <div style={{lineHeight: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                        <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>or</p>
                    </div>
                    <div className = "jackpotGameCountdownContainer">
                        <div className = "countdownTimeContainer">
                            <p style={{marginTop: "3%", marginBottom: "3%"}}>00</p>
                        </div>
                        
                        <div style={{height: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                            <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>:</p>
                        </div>
                        <div className = "countdownTimeContainer">
                        <p style={{marginTop: "3%", marginBottom: "3%"}}>35</p>
                        </div>
                    </div>


                </div>
                <Banner> 
                    <div style = {{position: "absolute", display: "inline-flex", alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minWidth: windowWidth < 1000 ? '50%' : '40%'}}>
                        <p style = {{color: "#FAD450", fontFamily: "Fira Sans", margin: 0, fontSize: windowWidth <= 1024 ? '2.5vh' : '4vh', fontWeight: "600"}}>AT STAKE: </p> 
                        <p style = {{ color: "#FAD450", fontFamily: "Basic", margin: 0, fontSize: windowWidth <= 1024 ? '2.5vh' : '4vh', 
                                      marginBottom: windowWidth <= 1024 && (windowWidth / windowHeight > 0.75) ? '0px' : '1%', marginLeft: "2%", color: "white"}}>
                                          R$ 1378
                                    </p> 
                    </div>
                </Banner>
            </div>
            <div className = "jackpotDepositContainer">
                <div className = "jackpotDepositInfo">
                    <strong className = "jackpotDepositInfoBigText">You have deposited - 0 (out of 4) items</strong>
                    <p className = "jackpotDepositInfoSmallText">The higher the bet, the greater the chance to win</p>
                    <p className = "jackpotDepositInfoSmallText">A small will be taken from your inventory when you deposit.</p>
                    <p className = "jackpotDepositInfoSmallText">To recieve your winnings, make sure you have enough smalls in your inventory.</p>
                </div>
                <div style = {{display: 'flex', flexDirection: "row", alignItems: "center", flexGrow: 3, justifyContent: "flex-start", width: windowWidth < 1024 ? '100%' : 'auto'}}>
                    { windowWidth < 1024 ? null : <Chevron /> }
                    <div style = {{marginLeft: '5%', display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center'}}>
                        <div style = {{display: 'flex', flexDirection: "row", alignItems: "center", flexGrow: 1}}>
                            <p style = {{fontFamily: "Fira Sans", fontSize: "2.5vh"}}>Chance:</p>
                            <p style = {{fontFamily: "Fira Sans", fontWeight: "600", color: "#059BDB", fontSize: "3vh", marginLeft: "3%"}}>0%</p>
                        </div>
                        <button style = {{flexGrow: 3, marginRight: '10%', backgroundColor: "#FFD700", border: 'none', borderRadius: 10, height: '60%'}}>
                        <p style = {{fontFamily: "Fira Sans", fontSize: "2.5vh", margin: '5% 10%'}}>Place A Bet</p>
                        </button>
                    </div>
                </div>

            </div>
            <div className = "jackpotItemsContainer">
                <JackpotItem />
            </div>
            
            <div className = "jackpotRoundInfoContainer">
                <p style = {{color: 'white', fontFamily: "Fira Sans", fontWeight: 600, fontSize: windowWidth < 1024 ? '2vh' : '3vh', marginTop: windowWidth < 1024 ? '5%' : '1%', marginBottom: 0 }}>THE GAME HAS BEGUN! MAKE YOUR DEPOSITS!</p>
                <div style = {{display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', justifyContent: 'center', width: '100%', marginTop: 0 }}>
                    <p style = {{background: "#368C0E", borderRadius: 2, fontFamily: "Fira Sans", color: 'white', padding: '1px 1%', fontSize: '1.2vh', maxWidth: '40%', alignSelf: windowWidth < 1024 ? "center" : 'flex-start', marginBottom: '0', marginTop: 0}}>PROVABLY FAIR</p>
                    <p style = {{fontFamily: "Fira Sans", color: 'white', alignSelf: 'center', fontSize: '1.2vh', marginLeft: '1%', marginTop: windowWidth < 1024 ? "2%" : '0'}}>Round Hash SHA 224: 7ec90198d35c71b17724c4080640316a5cca7ee100cc2e58a23d06ac</p>
                </div>
            </div>
            
        </div>
    )
}

export default windowSize(JackpotGame)