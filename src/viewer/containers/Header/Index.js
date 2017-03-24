import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <div id="header-wrapper" className="wrapper">
            <div id="header">
                <Logo />
                <Nav />
            </div>
        </div>
    )
};

export default Header;
