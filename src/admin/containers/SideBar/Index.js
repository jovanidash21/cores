import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const SideBar = () => {
    return(
        <aside className="app-sidebar" id="sidebar">
            <Header />
            <Menu />
            <Footer />
        </aside>
    )
};

export default SideBar;