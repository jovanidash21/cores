import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Body from './Body';

class UserDetails extends Component {
    render() {
        const { userUpdateDataFetch } = this.props;

        if (userUpdateDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userUpdateDataFetch.rejected) {
            return <Error error={userUpdateDataFetch.reason} />
        }
        else if (userUpdateDataFetch.fulfilled) {
            const [user] = userUpdateDataFetch.value;

            return(
                <div id="intro-wrapper" className="wrapper style1">
                    <div className="title">
                        My Profile
                    </div>
                    <section id="intro" className="container">
                        <Body user={user} />
                    </section>
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        userUpdateDataFetch: {
            url: `/api/user/${props.userID}`,
            force: true,
            refreshing: true
        }
    }
})(UserDetails);