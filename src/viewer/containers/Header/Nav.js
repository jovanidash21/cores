import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const { user } = this.props;

        return(
            <nav id="nav">
                <ul>
                    <li className="current">
                        <a href="index.html">
                            Home
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;