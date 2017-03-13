import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Header from './Header';

class UserProfile extends Component {
    render() {
        const { userProfileDataFetch } = this.props;
        const allUserProfileDataFetch = PromiseState.all([userProfileDataFetch]);
        if (allUserProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allUserProfileDataFetch.rejected) {
            return <Error error={allMovieDataFetch.reason} />
        }
        else if (allUserProfileDataFetch.fulfilled) {
            const [user] = allUserProfileDataFetch.value;

            return(
                <Header user={user}/>
            )
        }
    }
}

export default connect((props) => {
    return {
        userProfileDataFetch: `/api/user/${props.params.userID}`
    }
})(UserProfile);