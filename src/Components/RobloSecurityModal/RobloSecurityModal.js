import React, { useState } from 'react'
import Modal from 'react-modal'
import './RobloSecurityModal.css'

export default ({open, accept, cancel}) => {
    const [ROBLOSECURITY, setROBLOSECURITY] = useState("")
    
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
                    <p className = "over18Info">We need your ROBLOSECURITY to send out trade requests. Your ROBLOSECURITY <strong>will not</strong> be sent out to any servers. You may check the network tab in inspect element when you submt the form and you will not find anything that is sending out  your ROBLOSECURITY.</p>
                    <div className="roblosecurityInputContainer">
                        <input className="roblosecurityInput" placeholder={"Enter your ROBLOSECURITY"} value = {ROBLOSECURITY} onChange={e => setROBLOSECURITY(e.target.value)}/>
                    </div>
                    
                    <div className = "modalButtonContainer">
                        <p className = "acceptButton" onClick={accept}>LOGIN</p>
                        <p className = "cancelButton" onClick={cancel}>CANCEL</p>
                    </div>
                </div>
            </Modal>

    )
}