import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/Header/Header';
import SideBar from './Containers/SideBar/SideBar';


export default class App extends React.Component {
  state = {
    sidebarIsOpen: false
  }
  
  setSidebarIsOpen = (sidebarIsOpen) => {
    this.setState({sidebarIsOpen})
    
  }

  render() {
    return (
      <div className="App">
        <Header sidebarIsOpen = {this.state.sidebarIsOpen} setSidebarIsOpen = {this.setSidebarIsOpen}/>
        <SideBar sidebarIsOpen = {this.state.sidebarIsOpen}></SideBar>
      </div>
    );
  }
}


