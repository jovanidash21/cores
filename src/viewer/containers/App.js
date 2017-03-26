import React, { Component } from 'react';
import Footer from './Footer/Index';

class App extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
                <Footer />
            </div>
        )
    }
}

export default App;
