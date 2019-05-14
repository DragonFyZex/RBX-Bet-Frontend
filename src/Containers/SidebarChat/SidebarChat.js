import React from 'react'
import SidebarActions from '../../Components/SidebarActions/SidebarActions';
import "./SidebarChat.css"
import SendMessage from '../../Components/SendMessage/SendMessage';
import ChatLog from '../../Components/ChatLog/ChatLog';

export default class extends React.Component {

    state = {

    }
    
    sendMessage = (message) => {
        if (message.length > 0) {
            // TODO
        }
    }


    render () {
        
        return (
            <div className = "chatContainer">
                <SidebarActions action = {"CLEAR CHAT"} doAction = {() => console.log("TODO CHJANGE ME")}/>
                <ChatLog />
                <SendMessage sendMessage = {this.sendMessage} />
            </div>
        );
    }
} 
