import React, { Component } from 'react';
import { Link } from 'react-router';

class Right extends Component {
    render() {
        const { user } = this.props;

        return(
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown profile">
                    <a href="/html/pages/profile.html" className="dropdown-toggle"  data-toggle="dropdown">
                        <img className="profile-img" src={user.profileImage} />
                        <div className="title">Profile</div>
                    </a>
                    <div className="dropdown-menu">
                        <div className="profile-info">
                            <h4 className="username">
                                {
                                    user.firstName
                                }
                                &nbsp;
                                {
                                    user.lastName
                                }
                            </h4>
                        </div>
                        <ul className="action">
                            <li>
                                <Link to={'/admin/user/' + user._id}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Right;