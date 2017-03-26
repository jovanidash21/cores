import React from 'react';
import UserProfileHeader from '../containers/UserProfileHeader/Index';

const UserProfile  = (props) => {
    return (
        <div>
            <UserProfileHeader username={props.params.username} />
        </div>
    )
};

export default UserProfile;