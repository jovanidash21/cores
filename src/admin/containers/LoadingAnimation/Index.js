import React, { Component } from 'react';
var Spinner = require('react-spinkit');

const LoadingAnimation  = () => {
  return(
    <section className="loading-animation">
      <Spinner name='three-bounce' />
    </section>
  )
};

export default LoadingAnimation;
