import React from 'react';
import UserProfileHeader from '../containers/UserProfileHeader/Index';
import UserDetails from '../containers/UserDetails/Index';

const UserProfile  = (props) => {
  return(
    <div>
      <UserProfileHeader userID={props.params.userID} />
      <UserDetails userID={props.params.userID} />
    </div>
  )
};

export default UserProfile;
