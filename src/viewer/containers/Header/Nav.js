import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router';

class Nav extends Component {
    render() {
        const { user } = this.props;

        return(
            <nav id="nav">
                <ul>
                    <li className="current">
                        <IndexLink to="/">
                            Home
                        </IndexLink>
                    </li>
                    {
                        user._id != undefined
                            ?
                            <li>
                                <a href="#">
                                    {
                                        user.firstName
                                    }
                                    &nbsp;
                                    {
                                        user.lastName
                                    }
                                </a>
                            </li>
                            :
                            <li>
                                <a href="/auth/login">
                                    Login
                                </a>
                            </li>
                    }
                </ul>
            </nav>
        )
    }
}

export default Nav;