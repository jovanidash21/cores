import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Logo from './Logo';
import Nav from './Nav';

class HomeHeader extends Component {
    render() {
        const { userDataFetch } = this.props;
        if (userDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [ user ] = userDataFetch.value;

            return (
                <div id="header-wrapper" className="wrapper">
                    <div id="header">
                        <Logo />
                        <Nav user={user} />
                    </div>
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: {
            url: `/api/user`,
            force: true,
            refreshing: true
        }
    }
})(HomeHeader);
