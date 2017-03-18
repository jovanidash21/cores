import React from 'react';
import SeminarProfileContainer from '../containers/SeminarProfile/Index';

const SeminarProfile  = (props) => {
    return (
        <SeminarProfileContainer seminarID={props.params.seminarID} />
    )
};

export default SeminarProfile;