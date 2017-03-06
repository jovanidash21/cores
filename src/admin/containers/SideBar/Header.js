import React, { Component } from 'react';

const Header = () => {
    return(
        <div className="sidebar-header">
            <a className="sidebar-brand" href="#"><span className="highlight">CoRES</span>&nbsp;Admin</a>
            <button type="button" className="sidebar-toggle">
                <i className="fa fa-times" />
            </button>
        </div>
    )
};

export default Header;