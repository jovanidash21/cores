import React, { Component } from 'react';
import SideBar from '../containers/SideBar/Index';
import NavBar from '../containers/NavBar/Index';
import Footer from '../containers/Footer/Index';

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
