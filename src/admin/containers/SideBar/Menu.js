import React, { Component } from 'react';

const Menu  = () => {
    return(
        <div className="sidebar-menu">
            <ul className="sidebar-nav">
                <li>
                    <a href="./index.html">
                        <div className="icon">
                            <i className="fa fa-tasks" aria-hidden="true" />
                        </div>
                        <div className="title">Dashboard</div>
                    </a>
                </li>
                <li className="dropdown ">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <div className="icon">
                            <i className="fa fa-user" aria-hidden="true" />
                        </div>
                        <div className="title">User</div>
                    </a>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="section"><i className="fa fa-file-o" aria-hidden="true" />&nbsp;User</li>
                            <li><a href="#">All Users</a></li>
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