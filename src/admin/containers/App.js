import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation/Index';
import Error from './Error/Index';
import SideBar from './SideBar/Index';
import NavBar from './NavBar/Index';
import Footer from './Footer/Index';

class App extends Component {
    render() {
        const {
            userDataFetch,
            children
        } = this.props;
        if (userDataFetch.pending) {
            return (
                <LoadingAnimation />
            )
        }
        else if (userDataFetch.rejected) {
            return (
                <Error error={userDataFetch.reason} />
            )
        }
        else if (userDataFetch.fulfilled) {
            const [ user ] = userDataFetch.value;

            return (
                <div>
                    <SideBar user={user} />
                    <div className="app-container">
                        <NavBar user={user} />
                        {children}
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: `/api/user`
    }
})(App);
