import React from 'react'
import { IndexLink } from 'react-router';

const Nav  = () => {
  return(
    <nav id="nav">
      <ul>
        <li>
          <IndexLink to="/">
            Home
          </IndexLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
