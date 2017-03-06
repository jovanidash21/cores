import React, { Component } from 'react';

const Left  = () => {
    return(
        <ul className="nav navbar-nav navbar-left">
            <li className="navbar-title">Dashboard</li>
            <li className="navbar-search hidden-sm">
                <input id="search" type="text" placeholder="Search.." />
                <button className="btn-search"><i className="fa fa-search" /></button>
            </li>
        </ul>
    )
};

export default Left;