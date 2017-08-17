import React from 'react';
import { IndexLink } from 'react-router';

const Logo  = () => {
  return(
    <div id="logo">
      <h1>
        <IndexLink to="/">
          <img src="/images/logo-light.png" alt="" />
        </IndexLink>
      </h1>
      <p>
        Computer Research and Engineering Symposium 2018
      </p>
    </div>
  )
};

export default Logo;
