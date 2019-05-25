import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import './DepositItemsSidebar.css'

import windowSize from 'react-window-size';

import SidebarChat from '../SidebarChat/SidebarChat';

export default windowSize(
  class extends React.Component {
    
    state = {
      currentSidebarOption: "chat"
    }

    showSettings (event) {
      event.preventDefault();

    }
      
    setSidebarOption = (sidebarOption) => {
      this.setState({currentSidebarOption: sidebarOption})
    }

    

    render () {
      const menuWidth = this.props.windowWidth < this.props.windowHeight || this.props.windowWidth < 1024 ? '90%' : '20%';
      return (
        <Menu right width={menuWidth} isOpen={this.props.sidebarIsOpen} noOverlay > 

        </Menu>
      );
    }
  } 
)