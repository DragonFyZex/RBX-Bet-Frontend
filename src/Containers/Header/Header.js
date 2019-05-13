import React from 'react';
import './Header.css'

export default ({sidebarIsOpen, setSidebarIsOpen}) => (
    <div className="headerContainer">
        <img src={require("../../Assets/images/logo.png")} className="logo" />
        <button className={`button hamburger hamburger--collapse ${sidebarIsOpen ? 'is-active' : ''}`}  type="button" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
            <span className="hamburger-box">
                <span className="hamburger-inner" />
            </span>
        </button>
    </div>
)

