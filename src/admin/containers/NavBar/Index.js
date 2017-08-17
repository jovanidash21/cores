import React, { Component } from 'react';
import Mobile from './Mobile';
import Left from './Left';
import Right from './Right';

class NavBar extends Component {
  render() {
    const { user } = this.props;

    return(
      <nav className="navbar navbar-default" id="navbar">
        <div className="container-fluid">
          <div className="navbar-collapse collapse in">
            <Mobile />
            <Left />
            <Right
              user={user}
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
