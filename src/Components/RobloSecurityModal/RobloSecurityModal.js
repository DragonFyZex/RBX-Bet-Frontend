import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import ls from 'local-storage'
import axios from 'axios'
import './RobloSecurityModal.css'

export default ({open, accept, cancel}) => {
    const [ROBLOSECURITY, setROBLOSECURITY] = useState("")
    const [ROBLOSECURITYError, setROBLOSECURITYError] = useState("");

    return ( 
        <Modal
            isOpen={open}
            overlayClassName="over18Overlay"
            className = "over18ModalContainer"
            contentLabel="Example Modal"
            >
                <div className="over18ModalContainer">
                    <img src={require("../../Assets/images/user.svg")} className="modalicon"/>
                    <p className = "over18Heading">ROBLOSECURITY</p>
                    <p className = "over18Info">We need your ROBLOSECURITY to send out trade requests. Your ROBLOSECURITY <strong>will not</strong> be saved. It is only being sent out to a proxy which allows requests to roblox to be made. <a href="https://gitlab.com/DragonFyZex/robloxjackpot-proxy/">Here is the code for the proxy</a> </p>
                    
                    {ROBLOSECURITYError.length > 0 ?
                        <div className="modalError">
                            {
                                ROBLOSECURITYError == "Invalid" ? "Your ROBLOSECURITY is invalid" :
                                ROBLOSECURITYError == "BC" ? "You need a builder's club account to bet" : 
                                ROBLOSECURITYError == "13" ? "You need to have a 13+ account to bet" : 
                                "You need to make your trade privacy everyone"
                            }
                        </div> 
                    : null}
                    <div className="modalInputContainer">
                        <input className="modalInput" placeholder={"Enter your ROBLOSECURITY"} value = {ROBLOSECURITY} onChange={e => setROBLOSECURITY(e.target.value)}/>
                    </div>

                    <div className = "modalButtonContainer">
                        <p className = "acceptButton" 
                            onClick={async () => {
                            const error = await getError(ROBLOSECURITY);
                            setROBLOSECURITYError(error.error);
                            if (error.error.length == 0) {
                                accept(ROBLOSECURITY, error)
                            }
                        }}>LOGIN</p>
                        <p className = "cancelButton" onClick={cancel}>CANCEL</p>
                    </div>
                </div>
            </Modal>

    )
}

const getError = async (ROBLOSECURITY) => {
    let invalidRoblosecurity = false;
    
    const settingsRequest = await axios({
        method: 'post',
        data: {
            roblosecurity: ".ROBLOSECURITY=" + ROBLOSECURITY
        },
        url: `https://proxy.rbx.bet/getSettings`,
        
    }).catch(() => {

    });

    const tradePrivacyRequest = await axios({
        method: 'post',
        data: {
            roblosecurity: ".ROBLOSECURITY=" + ROBLOSECURITY
        },
        url: `https://proxy.rbx.bet/getTradePrivacy`,
        
    }).catch(() => {    
        invalidRoblosecurity = true;
    });

    if (invalidRoblosecurity) {
        return {error: "Invalid"}
    }

    if (!settingsRequest.data.IsAnyBC) {
        return Object.assign({}, settingsRequest.data, {error: "BC"})
    }   
    else if (!settingsRequest.data.UserAbove13){

        return Object.assign({}, settingsRequest.data, {error: "13"})
    }
    else if (tradePrivacyRequest.data.tradePrivacy != "All") {
        return Object.assign({}, settingsRequest.data, {error: "Privacy"})
    } else {
        return Object.assign({}, settingsRequest.data, {error: ""})
    }

    
}
