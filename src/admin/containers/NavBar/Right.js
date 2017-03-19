import React, { Component } from 'react';
import { Link } from 'react-router';

class Right extends Component {
    render() {
        const { user } = this.props;

        return(
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown notification">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon"><i className="fa fa-shopping-basket" aria-hidden="true" /></div>
                        <div className="title">New Orders</div>
                        <div className="count">0</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="dropdown-header">Ordering</li>
                            <li className="dropdown-empty">No New Ordered</li>
                            <li className="dropdown-footer">
                                <a href="#">View All <i className="fa fa-angle-right" aria-hidden="true" /></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown notification warning">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon"><i className="fa fa-comments" aria-hidden="true" /></div>
                        <div className="title">Unread Messages</div>
                        <div className="count">99</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="dropdown-header">Message</li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-warning pull-right">10</span>
                                    <div className="message">
                                        <img className="profile" src="https://placehold.it/100x100" />
                                        <div className="content">
                                            <div className="title">"Payment Confirmation.."</div>
                                            <div className="description">Alan Anderson</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-warning pull-right">5</span>
                                    <div className="message">
                                        <img className="profile" src="https://placehold.it/100x100" />
                                        <div className="content">
                                            <div className="title">"Hello World"</div>
                                            <div className="description">Marco  Harmon</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-warning pull-right">2</span>
                                    <div className="message">
                                        <img className="profile" src="https://placehold.it/100x100" />
                                        <div className="content">
                                            <div className="title">"Order Confirmation.."</div>
                                            <div className="description">Brenda Lawson</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">View All <i className="fa fa-angle-right" aria-hidden="true" /></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown notification danger">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon"><i className="fa fa-bell" aria-hidden="true" /></div>
                        <div className="title">System Notifications</div>
                        <div className="count">10</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="dropdown-header">Notification</li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-danger pull-right">8</span>
                                    <div className="message">
                                        <div className="content">
                                            <div className="title">New Order</div>
                                            <div className="description">$400 total</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-danger pull-right">14</span>
                                    Inbox
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="badge badge-danger pull-right">5</span>
                                    Issues Report
                                </a>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">View All <i className="fa fa-angle-right" aria-hidden="true" /></a>
                            </li>
                        </ul>
                    </div>
                </li>
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
                                    <span className="badge badge-danger pull-right">5</span>
                                    My Inbox
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Setting
                                </a>
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