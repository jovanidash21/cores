import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="top-bar" id="topbar">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <a className="logo pull-left" href="#intro" title="Eventify">
                                <span />
                            </a>
                            <div className="navbar main-nav pull-right">
                                <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <nav>
                                    <div className="nav-collapse collapse">
                                        <ul id="mainnav" className="nav">
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#speakers">Speakers</a></li>
                                            <li><a href="#schedule">Schedule</a></li>
                                            <li><a href="#workshops">Workshops</a></li>
                                            <li><a href="#venue">Venue</a></li>
                                            <li><a href="#sponsors">Sponsors</a></li>
                                            <li><a href="#news">News</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
