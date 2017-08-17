import React from 'react';
import EditSpeakerFormContainer from '../containers/EditSpeakerForm/Index';

const EditSpeakerForm  = (props) => {
  return(
    <EditSpeakerFormContainer speakerID={props.params.speakerID} />
  )
};

export default EditSpeakerForm;
