import React from 'react';
import Card from '../containers/Card/Index';
import SeminarsTimeline from '../containers/SeminarsTimeline/Index';
import SpeakersList from '../containers/SpeakersList/Index'

const Dashboard  = () => {
    return (
        <div>
            <Card />
            <div className="row">
                <SeminarsTimeline />
                <SpeakersList />
            </div>
        </div>
    )
};

export default Dashboard;
