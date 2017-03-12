import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import Error from '../Error/Index';
import Mobile from './Mobile';
import Left from './Left';
import Right from './Right';

class NavBar extends Component {
    render() {
        const { userDataFetch } = this.props;
        if (userDataFetch.pending) {
            return (
                <LoadingAnimation />
            )
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [ user ] = userDataFetch.value;

            return(
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container-fluid">
                        <div className="navbar-collapse collapse in">
                            <Mobile />
                            <Left />
                            <Right
                                user={user}
                            />
                        </div>
                    </div>
                </nav>
            )
        }
    }
}

export default connect(() => {
    const refreshUserData = {
        userDataFetch: {
            url: `/api/user`,
            force: true,
            refreshing: true
        }
    };

    return {
        userDataFetch: `/api/user`
    }
})(NavBar);
