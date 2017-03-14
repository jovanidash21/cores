import React from 'react';
import UserProfileContainer from '../containers/UserProfile/Index';

const UserProfile  = (props) => {
    return (
        <UserProfileContainer userID={props.params.userID}/>
    )
};

export default UserProfile;