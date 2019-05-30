import React from 'react';
import './TOS.css';
import Header from './Containers/Header/Header';
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
      <div className="TOS">
      
        <Header sidebarIsOpen = {this.state.sidebarIsOpen} setSidebarIsOpen = {this.setSidebarIsOpen}/>
        <h1>Terms of Service ("Terms")</h1>
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the rbx.bet(https://rbx.bet) website (the "Service") operated by RBXBET ("us", "we", or "our"). </p>
        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service</p>

        <h1>Betting on rbx.bet(https://rbx.bet)</h1>
        <p>By placing a bet on RBXBET, you confirm that you are 18 years of older. RBXBET is not responsible for any loss of any items(virtual tradeable items on Roblox, known as limiteds)</p>
        <p>RBXBET has no liability for errors with the "Service". The "Service" is provided as is and we provide you with no warranty regarding the quality, accuracy, or reliability.</p>
        <p>RBXBET cannot be held responsible in any event, direct, indirect or consequential with the use of the website. RBXBET reserves the right to cancel your wager at any time, with no refunds.</p>
        <p>RBXBET is not responsible for the actions of Roblox Corporation affecting the "Service", if the "Service" in any way may stop and cease to continue(not sending out rewards because of Roblox Corporation's decisions), we have no liability for their actions.</p>
        <p>RBXBET may cease betting at anytime without notice. </p>

        <h1>Links To Other Web Sites</h1>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by RBXBET</p>
        <p>RBXBET has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that RBXBET shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
        <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

        <h1>Termination</h1>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

        <h1>Governing Law</h1>
        <p>These Terms shall be governed and construed in accordance with the laws of Russia without regard to its conflict of law provisions.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
        
        <h1>Changes</h1>
        <p>These Terms shall be governed and construed in accordance with the laws of Russia without regard to its conflict of law provisions.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
        
        <h1>Affiliation</h1>
        <p>RBXBET and the "Service" are not affiliated with Roblox Corporation.</p>

        <h1>Contact Us</h1>
        <p>If you have any questions about these terms, please contact us.</p>

      </div>
    );
  }
}


