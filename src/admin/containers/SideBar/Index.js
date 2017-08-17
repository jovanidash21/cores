import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

class SideBar extends Component {
  render() {
    const { user } = this.props;

    return(
      <aside className="app-sidebar" id="sidebar">
        <Header />
        <Menu user={user} />
        <Footer />
      </aside>
    )
  }
}

export default SideBar;
