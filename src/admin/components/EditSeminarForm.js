import React from 'react';
import EditSeminarFormContainer from '../containers/EditSeminarForm/Index';

const EditSeminarForm  = (props) => {
  return(
    <EditSeminarFormContainer seminarID={props.params.seminarID} />
  )
};

export default EditSeminarForm;
