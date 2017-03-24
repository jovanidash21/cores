import React, { Component } from 'react';
var Spinner = require('react-spinkit');

const LoadingAnimation  = () => {
    return(
        <section className="loading-animation">
            <Spinner spinnerName='rotating-plane' />
        </section>
    )
};

export default LoadingAnimation;