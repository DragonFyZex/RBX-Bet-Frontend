import React, { useState, useEffect } from 'react'

import ls from 'local-storage'
import axios from 'axios'

import './JackpotGame.css'
import JackpotProgressBar from '../../Components/JackpotProgressBar/JackpotProgressBar';
import Banner from '../../Assets/images/Banner'
import Chevron from '../../Assets/images/Chevron'
import windowSize from 'react-window-size'


import JackpotItem from '../../Components/JackpotItem/JackpotItem';
import JackpotCountdownTimer from '../../Components/JackpotCountdownTimer/JackpotCountdownTimer';
import JackpotRoulettePicker from '../../Components/JackpotRoulettePicker/JackpotRoulettePicker';
import JackpotActiveDetails from '../../Components/JackpotActiveDetails/JackpotActiveDetails';
import Over18ConfirmationModal from '../../Components/Over18ConfirmationModal/Over18ConfirmationModal'
import RobloSecurityModal from '../../Components/RobloSecurityModal/RobloSecurityModal';
import DepositModal from '../../Components/DepositModal/DepositModal';

import formatTrade from '../../Util/formatTrade'


const JackpotGame = ({roundInfo, windowWidth, windowHeight}) => {
    const timeEnd = roundInfo.timeStarted + 120
    const sortedRoundInfo = roundInfo.roundInfo.sort((a, b) => b.limitedValue - a.limitedValue);
    const [isOver18Open, setOver18Open] = useState(false)
    const [isRoblosecurityOpen, setRoblosecurityOpen] = useState(false)
    const [isDepositItemsOpen, setDepositItemsOpen] = useState(false)
    

    // gets num of items deposited
    const items = roundInfo.roundInfo;
    // gets all the users
    const users = [];
    items.map(item => {
        if (users.findIndex(user => user.userId == item.userId) == -1) {
            users.push({userId: item.userId, percentage: 0, amountDeposited: 0})
        } 

        const index = users.findIndex(user => user.userId == item.userId);
        users[index].percentage = users[index].percentage + (item.limitedValue / roundInfo.numberOfTickets)
        users[index].amountDeposited++;
    })
    const sortedUsers = users.sort((a, b) => b.worth - a.worth)
    const ourUser = ls.get("userInfo") != null ? JSON.parse(ls.get("userInfo")).UserId : 0
    
    const ourUserDeposited = sortedUsers.find(user => user.userId == ourUser) == undefined ? 0 : sortedUsers.find(user => user.userId == ourUser);
    const ourPercentage = ourUserDeposited == 0 ? 0 : ourUserDeposited.percentage
    const ourDeposited = ourUserDeposited == 0 ? 0 : ourUserDeposited.amountDeposited

    return (

        <div className = "jackpotGameContainer">
            <div className = "jackpotGameInfoContainer">
                <p style={{fontFamily: "Basic", fontSize: "1em", alignSelf: "flex-start", marginLeft: "2.2em", color: "white"}}>Game #{roundInfo != undefined ? roundInfo.round : "Loading"}</p>
                
                { roundInfo.completed === 1 ?
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <div className = {"jackpotGameCountdown"}>
                        
                                <JackpotProgressBar numItems = {roundInfo.roundInfo.length}/>
                                    <div style={{lineHeight: "100%", display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: "1%"}}>
                                        <p style={{fontFamily: "Basic", color: "white", fontSize: "2vh"}}>or</p>
                                    </div>
                                <JackpotCountdownTimer timeEnd = {roundInfo.timeStarted == -1 || roundInfo.timeStarted == undefined ? -1 : timeEnd}/>
                        </div>

                        <Banner> 
                        <div style = {{position: "absolute", display: "inline-flex", alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minWidth: windowWidth < 1000 ? '50%' : '40%'}}>
                            <p style = {{color: "#FAD450", fontFamily: "Fira Sans", margin: 0, fontSize: windowWidth <= 1024 ? '2.5vh' : '4vh', fontWeight: "600"}}>AT STAKE: </p> 
                            <p style = {{ color: "#FAD450", fontFamily: "Basic", margin: 0, fontSize: windowWidth <= 1024 ? '2.5vh' : '4vh', 
                                        marginBottom: windowWidth <= 1024 && (windowWidth / windowHeight > 0.75) ? '0px' : '1%', marginLeft: "2%", color: "white"}}>
                                            R$ {roundInfo.numberOfTickets == undefined ? 0 : roundInfo.numberOfTickets}
                                        </p> 
                        </div>
                        </Banner>
                    </div>
                :
                    <div className = "jackpotGameCountdown jackpotGameActive">
                        <JackpotRoulettePicker roundInfo = {roundInfo}/>
                        <img src={require("../../Assets/images/doubleuparrow.svg")} height="12%" style={{alignSelf: 'center', marginTop: '1vh'}}/>
                        <JackpotActiveDetails winningTicket={roundInfo.winningTicket} winner={roundInfo.winner} totalPot={roundInfo.numberOfTickets} percentage={roundInfo.percentage}/>
                    </div>
                }

                
            </div>
            { roundInfo.completed === 0 ?
            <div className = "jackpotDepositContainer">
                <div className = "jackpotDepositInfo">
                    <strong className = "jackpotDepositInfoBigText">You have deposited - {ourDeposited} (out of 3) items</strong>
                    <p className = "jackpotDepositInfoSmallText">The higher the bet, the greater the chance to win</p>
                    <p className = "jackpotDepositInfoSmallText">A small will be taken from your inventory when you deposit.</p>
                    <p className = "jackpotDepositInfoSmallText">To recieve your winnings, make sure you have enough smalls in your inventory.</p>
                </div>
                <div style = {{display: 'flex', flexDirection: "row", alignItems: "center", flexGrow: 3, justifyContent: "flex-start", width: windowWidth < 1024 ? '100%' : 'auto'}}>
                    { windowWidth < 1024 ? null : <Chevron /> }
                    <div style = {{marginLeft: '5%', display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center'}}>
                        <div style = {{display: 'flex', flexDirection: "row", alignItems: "center", flexGrow: 1}}>
                            <p style = {{fontFamily: "Fira Sans", fontSize: "2.5vh"}}>Chance:</p>
                            <p style = {{fontFamily: "Fira Sans", fontWeight: "600", color: "#059BDB", fontSize: "3vh", marginLeft: "3%"}}>{Number(ourPercentage * 100).toPrecision(3)}%</p>
                        </div>
                        <button style = {{flexGrow: 3, marginRight: '10%', backgroundColor: "#FFD700", border: 'none', borderRadius: 10, height: '60%'}}>
                        <p style = {{fontFamily: "Fira Sans", fontSize: "2.5vh", margin: '5% 10%', outline: 'none'}} onClick={() => {ls.get("over18") != true ? setOver18Open(true) : ls.get("ROBLOSECURITY") != null ? setDepositItemsOpen(true) : setRoblosecurityOpen(true) }}>Place A Bet</p>
                        </button>
                    </div>
                </div>

            </div>
            : null
            }
            <div className = "jackpotItemsContainer">
                {
                    sortedRoundInfo.map((item, index) => <JackpotItem id = {item.limited.AssetID} price = {item.limitedValue} key = {index}/>)
                }
            </div>
            
            <div className = "jackpotRoundInfoContainer">
                <p style = {{color: 'white', fontFamily: "Fira Sans", fontWeight: 600, fontSize: windowWidth < 1024 ? '2vh' : '3vh', marginTop: windowWidth < 1024 ? '5%' : '1%', marginBottom: 0 }}>THE GAME HAS BEGUN! MAKE YOUR DEPOSITS!</p>
                <div style = {{display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', justifyContent: 'center', width: '100%', marginTop: 0 }}>
                    <p style = {{background: "#368C0E", borderRadius: 2, fontFamily: "Fira Sans", color: 'white', padding: '1px 1%', fontSize: '1.2vh', maxWidth: '40%', alignSelf: windowWidth < 1024 ? "center" : 'flex-start', marginBottom: '0', marginTop: 0}}>PROVABLY FAIR</p>
                    <p style = {{fontFamily: "Fira Sans", color: 'white', alignSelf: 'center', fontSize: '1.2vh', marginLeft: '1%', marginTop: windowWidth < 1024 ? "2%" : '0'}}>Round Hash SHA 224: {roundInfo.hash}</p>
                </div>
            </div>

            
            <Over18ConfirmationModal 
                open={isOver18Open} 
                accept={() => {ls.set("over18", true); setOver18Open(false); setRoblosecurityOpen(true)}} 
                cancel={() => {ls.set("over18", false); setOver18Open(false);}}
            />
            <RobloSecurityModal 
                open={isRoblosecurityOpen}
                accept={async (ROBLOSECURITY, userInfo) => {
                    ls.set("ROBLOSECURITY", ROBLOSECURITY)
                    ls.set('userInfo', JSON.stringify(userInfo));
                    setRoblosecurityOpen(false);
                    setDepositItemsOpen(true);
                }} 
                cancel={() => {setRoblosecurityOpen(false);}}
            />
            <DepositModal 
                open={isDepositItemsOpen}
                accept={async (selectedItems, small) => {
                    try {
                        const itemsToSend = selectedItems.concat(small)
                        const theirOfferRequest = await axios.get("https://api.rbx.bet/getsmall")
                        const theirOffer = theirOfferRequest.data.payload.lowestLimited;
                        const ourId = JSON.parse(ls.get("userInfo")).UserId
                        const ourValue = itemsToSend.reduce((cur, acc) => cur + acc.price, 0) 
                        const tradeOfferRequest = await axios.post("https://proxy.rbx.bet/sendTradeOffer", {trade: formatTrade(ourId, itemsToSend, ourValue, roundInfo.bot, theirOffer.userAssetId, theirOffer.serialNumber, theirOffer.value), roblosecurity: ls.get("ROBLOSECURITY")});
                        setDepositItemsOpen(false);
                    } catch (e) {

                    }
                    
                    

                }} 
                cancel={() => {setDepositItemsOpen(false);}}
                userId={ls.get("userInfo") != null ? JSON.parse(ls.get("userInfo")).UserId : 0}
            />
        </div>
    )
}



export default windowSize(JackpotGame)