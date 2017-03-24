import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';

class Header extends Component {
    render() {
        const { user } = this.props;

        return (
            <div id="header-wrapper" className="wrapper">
                <div id="header">
                    <Logo />
                    <Nav user={user} />
                </div>
            </div>
        )
    }
}

export default Header;
