import React, { Component } from 'react';
import Mobile from './Mobile';
import Left from './Left';
import Right from './Right';

const NavBar  = () => {
    return(
        <nav className="navbar navbar-default" id="navbar">
            <div className="container-fluid">
                <div className="navbar-collapse collapse in">
                    <Mobile />
                    <Left />
                    <Right />
                </div>
            </div>
        </nav>
    )
};

export default NavBar;