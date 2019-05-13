import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './SideBar.css'

export default class extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }
    

  

  render () {
    return (
      <Menu right customBurgerIcon={ <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Random-image.jpg" />}  isOpen={this.props.sidebarIsOpen} noOverlay> 
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}