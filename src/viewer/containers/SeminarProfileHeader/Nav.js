import React, { Component } from 'react'
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    const { user } = this.props;

    return(
      <nav id="nav">
        <ul>
          {
            user._id != undefined
              ?
              <li>
                <Link to={'/user/' + user._id}>
                  {
                    user.firstName
                  }
                  &nbsp;
                  {
                    user.lastName
                  }
                </Link>
              </li>
              :
              <li>
                <a href="/auth/login">
                  Login
                </a>
              </li>
          }
        </ul>
      </nav>
    )
  }
}

export default Nav;
