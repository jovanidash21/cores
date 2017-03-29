import React from 'react';
import SeminarProfileHeader from '../containers/SeminarProfileHeader/Index';
import SeminarDescription from '../containers/SeminarDescription/Index';

const SeminarProfile  = (props) => {
    return (
        <div>
            <SeminarProfileHeader seminarID={props.params.seminarID} />
            <SeminarDescription seminarID={props.params.seminarID} />
        </div>
    )
};

export default SeminarProfile;