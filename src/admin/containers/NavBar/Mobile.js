import React, { Component } from 'react';

const Mobile = () => {
    return(
        <ul className="nav navbar-nav navbar-mobile">
            <li>
                <button type="button" className="sidebar-toggle">
                    <i className="fa fa-bars" />
                </button>
            </li>
            <li className="logo">
                <a className="navbar-brand" href="#"><span className="highlight">Flat v3</span> Admin</a>
            </li>
            <li>
                <button type="button" className="navbar-toggle">
                    <img className="profile-img" src="/images/profile/jovani-warguez.png" />
                </button>
            </li>
        </ul>
    )
};

export default Mobile;