import React, { useState } from 'react'
import Modal from 'react-modal'
import './Over18ConfirmationModal.css'

export default ({open, accept, cancel}) => {

    return ( 
        <Modal
            isOpen={open}
            overlayClassName="over18Overlay"
            className = "over18ModalContainer"
            contentLabel="Example Modal"
            >
                <div className="over18ModalContainer">
                    <img src={require("../../Assets/images/caution.svg")} className="modalicon"/>
                    <p className = "over18Heading">ARE YOU OVER 18?</p>
                    <p className = "over18Info">Before accessing all features of this site, you must read & agree to our <a style={{color: "#509AF0", display: 'inline'}} href="https://google.com">Terms Of Service</a>. By accessing this site & using it's features you agree that you are 18 years of age or older and that gambling is legal within your jurisdiction.</p>
                    <div className = "modalButtonContainer">
                        <p className = "acceptButton" onClick={accept}>I AGREE</p>
                        <p className = "cancelButton" onClick={cancel}>CANCEL</p>
                    </div>
                </div>
            </Modal>

    )
}