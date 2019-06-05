import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/Header/Header';
import SideBar from './Containers/SideBar/SideBar';
import Main from './Containers/Main/Main'
import axios from 'axios'
import DepositItemsSidebar from './Containers/DepositItemsSidebar/DepositItemsSidebar';
import ls from 'local-storage'
import RobloSecurityModal from './Components/RobloSecurityModal/RobloSecurityModal'

export default class App extends React.Component {
  state = {
    sidebarIsOpen: false,
    isRoblosecurityOpen: false
  }

  
  setSidebarIsOpen = (sidebarIsOpen) => {
    this.setState({sidebarIsOpen})
    
  }

  componentDidMount = async () => {

    if (ls.get("proxy") == null) 
      ls.set("proxy", `https://proxy.rbx.bet/`);  

    if (ls.get("over18") == null) {
      ls.set("over18", false);
    }

    if (ls.get("ROBLOSECURITY") == null) 
      return

    const tradePrivacyRequest = await axios({
      method: 'post',
      data: {
          roblosecurity: ".ROBLOSECURITY=" + ls.get("ROBLOSECURITY")
      },
      url: `${ls.get("proxy")}/getTradePrivacy`,
      
    }).catch(() => {    
        this.setState({isRoblosecurityOpen: true})
    });

    
  
    
  }

  render() {
    return (
      <div className="App">
      
        <Header sidebarIsOpen = {this.state.sidebarIsOpen} setSidebarIsOpen = {this.setSidebarIsOpen}/>
        <Main />
        {/* <SideBar sidebarIsOpen = {true} /> */}
        {/* <DepositItemsSidebar sidebarIsOpen = {true} style={{position: "absolute"}} /> */}
        <RobloSecurityModal 
          open={this.state.isRoblosecurityOpen}
          accept={async (ROBLOSECURITY, userInfo) => {
              ls.set("ROBLOSECURITY", ROBLOSECURITY)
              ls.set('userInfo', JSON.stringify(userInfo));
              this.setState({isRoblosecurityOpen: false});
          }} 
          cancel={() => {this.setState({isRoblosecurityOpen: false});}}
        />
      </div>
    );
  }
}


