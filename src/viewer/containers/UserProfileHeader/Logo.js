import React, { Component } from 'react'
import { Link } from 'react-router';

class Logo extends Component {
  render() {
    const { user } = this.props;

    return(
      <div id="logo">
        <h1>
          <Link to={'/' + user.username}>
            {
              user.firstName
            }
            &nbsp;
            {
              user.lastName
            }
          </Link>
        </h1>
        <p>
          &#64;
          {
            user.username
          }
        </p>
        <ul className="actions">
          <li>
            <form action="/auth/logout" method="post">
              <input type="submit" className="style3" value="Logout" />
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default Logo;
