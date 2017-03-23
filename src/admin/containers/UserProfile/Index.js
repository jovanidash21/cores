import React, { Component } from 'react';
import { connect } from 'react-refetch';
import { browserHistory } from 'react-router';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import Header from './Header';
import Body from './Body';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteUserSubmit = this.handleDeleteUserSubmit.bind(this);
    }
    handleDeleteUserSubmit(userID) {
        const { deleteUser } = this.props;

        deleteUser(userID);
        browserHistory.push('/admin/users');
    }

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
            const { handleDeleteUserSubmit } = this;

            return(
                <div>
                    <Menu
                        user={user}
                        handleDeleteUserSubmit={handleDeleteUserSubmit}
                    />
                    <Header user={user} />
                    <Body user={user} />
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        userProfileDataFetch: {
            url: `/api/user/${props.userID}`,
            force: true,
            refreshing: true
        },
        deleteUser: (userID) => ({
            deleteUserFetch: {
                url: `/api/user/${userID}`,
                method: 'DELETE',
                force: true,
                refreshing: true
            }
        })
    }
})(UserProfile);