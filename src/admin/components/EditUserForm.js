import React from 'react';
import EditUserFormContainer from '../containers/EditUserForm/Index';

const EditUserForm  = (props) => {
  return(
    <EditUserFormContainer userID={props.params.userID} />
  )
};

export default EditUserForm;
