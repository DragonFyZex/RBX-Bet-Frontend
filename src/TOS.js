import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/Header/Header';
import SideBar from './Containers/SideBar/SideBar';
import Main from './Containers/Main/Main'
import axios from 'axios'
import DepositItemsSidebar from './Containers/DepositItemsSidebar/DepositItemsSidebar';
import ls from 'local-storage'

export default class App extends React.Component {
  state = {
    sidebarIsOpen: false
  }

  
  setSidebarIsOpen = (sidebarIsOpen) => {
    this.setState({sidebarIsOpen})
    
  }

  componentDidMount = () => {
    if (ls.get("over18") == null) {
      ls.set("over18", false);
    }
  }

  render() {
    return (
      <div className="App">
      
        <Header sidebarIsOpen = {this.state.sidebarIsOpen} setSidebarIsOpen = {this.setSidebarIsOpen}/>
        {/* <SideBar sidebarIsOpen = {true} /> */}
        {/* <DepositItemsSidebar sidebarIsOpen = {true} style={{position: "absolute"}} /> */}

      </div>
    );
  }
}


