import React from 'react';
import SpeakerProfileContainer from '../containers/SpeakerProfile/Index';

const SpeakerProfile  = (props) => {
  return(
    <SpeakerProfileContainer speakerID={props.params.speakerID} />
  )
};

export default SpeakerProfile;
