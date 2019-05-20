import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/Header/Header';
import SideBar from './Containers/SideBar/SideBar';
import Main from './Containers/Main/Main'

export default class App extends React.Component {
  state = {
    sidebarIsOpen: true
  }
  
  setSidebarIsOpen = (sidebarIsOpen) => {
    this.setState({sidebarIsOpen})
    
  }

  render() {
    return (
      <div className="App">
        <Header sidebarIsOpen = {this.state.sidebarIsOpen} setSidebarIsOpen = {this.setSidebarIsOpen}/>
        <Main />
        <SideBar sidebarIsOpen = {this.state.sidebarIsOpen} />
      </div>
    );
  }
}


