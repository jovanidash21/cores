import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation/Index';
import Error from './Error/Index';

class App extends Component {
    render() {
        const {
            userDataFetch,
            children
        } = this.props;

        if (userDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [ user ] = userDataFetch.value;

            return (
                <div>
                    {children}
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
})(App);
