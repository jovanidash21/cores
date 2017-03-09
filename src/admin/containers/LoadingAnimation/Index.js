import React, { Component } from 'react';
var Spinner = require('react-spinkit');

const LoadingAnimation  = () => {
    return(
        <section className="loading-animation">
            <Spinner spinnerName='three-bounce' />
        </section>
    )
};

export default LoadingAnimation;