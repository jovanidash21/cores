import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Header from './Header';

class UserProfile extends Component {
    render() {
        const { userProfileDataFetch } = this.props;

        if (userProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userProfileDataFetch.rejected) {
            return <Error error={userProfileDataFetch.reason} />
        }
        else if (userProfileDataFetch.fulfilled) {
            const [user] = userProfileDataFetch.value;

            return(
                <Header user={user}/>
            )
        }
    }
}

export default connect((props) => {
    return {
        userProfileDataFetch: `/api/user/${props.userID}`
    }
})(UserProfile);