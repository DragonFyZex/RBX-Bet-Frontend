import React, { useState } from 'react'
import Modal from 'react-modal'
import './Over18ConfirmationModal.css'

export default ({open}) => {
    const [message, setMessage] = useState("");
    return ( 
        <Modal
            isOpen={open}
            contentLabel="Example Modal"
            >
                <div>color</div>
            </Modal>

    )
}