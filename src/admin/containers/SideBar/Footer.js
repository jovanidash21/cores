import React, { Component } from 'react';

const Footer  = () => {
    return(
        <div className="sidebar-footer">
            <ul className="menu">
                <li>
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-cogs" aria-hidden="true" />
                    </a>
                </li>
                <li><a href="#"><span className="flag-icon flag-icon-ph flag-icon-squared" /></a></li>
            </ul>
        </div>
    )
};

export default Footer;