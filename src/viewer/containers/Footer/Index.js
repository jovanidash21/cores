import React, { Component } from 'react';
import Header from './Header';
import ContactDetails from './ContactDetails';
import Copyright from './Copyright';

class Footer extends Component {
  render() {
    return(
      <div id="footer-wrapper" className="wrapper">
        <div className="title">Contact Us</div>
        <div id="footer" className="container">
          <Header />
          <hr />
          <div className="row 150%">
            <ContactDetails />
          </div>
          <hr />
        </div>
        <Copyright />
      </div>
    )
  }
}

export default Footer;
