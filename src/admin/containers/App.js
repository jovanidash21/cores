import React, { Component } from 'react';
import SideBar from './SideBar/Index';
import NavBar from './NavBar/Index';
import Footer from './Footer/Index';

class App extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <SideBar />
                <div className="app-container">
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;
