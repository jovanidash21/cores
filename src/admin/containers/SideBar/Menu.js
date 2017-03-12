import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

const Menu  = () => {
    return(
        <div className="sidebar-menu">
            <ul className="sidebar-nav">
                <li className="active">
                    <IndexLink to="/admin">
                        <div className="icon">
                            <i className="fa fa-tasks" aria-hidden="true" />
                        </div>
                        <div className="title">Dashboard</div>
                    </IndexLink>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon">
                            <i className="fa fa-line-chart" aria-hidden="true" />
                        </div>
                        <div className="title">Seminar</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="section"><i className="fa fa-file-o" aria-hidden="true" />&nbsp;Seminar</li>
                            <li><a href="#">Add New</a></li>
                            <li>
                                <Link to="/admin/seminars">
                                    All Seminars
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon">
                            <i className="fa fa-microphone" aria-hidden="true" />
                        </div>
                        <div className="title">Speaker</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="section"><i className="fa fa-file-o" aria-hidden="true" />&nbsp;Speaker</li>
                            <li><a href="#">All Speakers</a></li>
                            <li><a href="#">Add New</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <div className="icon">
                            <i className="fa fa-money" aria-hidden="true" />
                        </div>
                        <div className="title">Sale</div>
                    </a>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon">
                            <i className="fa fa-user" aria-hidden="true" />
                        </div>
                        <div className="title">User</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="section"><i className="fa fa-file-o" aria-hidden="true" />&nbsp;User</li>
                            <li>
                                <Link to="/admin/users">
                                    All Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/user/add">
                                    Add New
                                </Link>
                            </li>
                            <li><a href="#">Add New</a></li>
                            <li className="line" />
                            <li className="section"><i className="fa fa-file-o" aria-hidden="true" />&nbsp;Profile</li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Edit Profile</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Menu;