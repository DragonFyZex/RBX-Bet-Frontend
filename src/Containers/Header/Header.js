import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './Header.css'

export default ({sidebarIsOpen, setSidebarIsOpen}) => (
    <div className="headerContainer">
        <img src={require("../../Assets/images/logorbxbet.png")} className="logo" style={{height: '100%'}}/>
        {/* <button className={`button hamburger hamburger--collapse ${sidebarIsOpen ? 'is-active' : ''}`}  type="button" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
            <span className="hamburger-box">
                <span className="hamburger-inner" />
            </span>
        </button> */}
        <Link to="/" className="screenText screenTextClickable" href="https://discord.gg/vx6MA7S" style={{marginLeft: 'auto'}}>Play</Link>
        <a className="screenText screenTextClickable" href="https://discord.gg/vx6MA7S" target="_blank"  style={{marginLeft: '2%'}}>Support</a>
        <a className="screenText screenTextClickable" href="https://twitter.com/rbxbet" target="_blank" style={{marginLeft: '2%'}}>Social</a>
        <Link to="/tos" className="screenText screenTextClickable" target="_blank"  style={{marginRight: '3%'}}>Terms Of Service</Link >
    </div>
)

