import React, { Component } from 'react';
import { connect } from 'react-refetch';
import { browserHistory } from 'react-router';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import Header from './Header';
import Body from './Body';

class SpeakerProfile extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteSpeakerSubmit = this.handleDeleteSpeakerSubmit.bind(this);
    }
    handleDeleteSpeakerSubmit(speakerID) {
        const { deleteSpeaker } = this.props;

        deleteSpeaker(speakerID);
        browserHistory.push('/admin/speakers');
    }

    render() {
        const { speakerProfileDataFetch } = this.props;

        if (speakerProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (speakerProfileDataFetch.rejected) {
            return <Error error={speakerProfileDataFetch.reason} />
        }
        else if (speakerProfileDataFetch.fulfilled) {
            const [speaker] = speakerProfileDataFetch.value;
            const { handleDeleteSpeakerSubmit } = this;

            return(
                <div>
                    <Menu
                        speaker={speaker}
                        handleDeleteSpeakerSubmit={handleDeleteSpeakerSubmit}
                    />
                    <Header speaker={speaker} />
                    <Body speaker={speaker} />
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        speakerProfileDataFetch: `/api/speaker/${props.speakerID}`,
        deleteSpeaker: (speakerID) => ({
            deleteSpeakerFetch: {
                url: `/api/speaker/${speakerID}`,
                method: 'DELETE',
                force: true,
                refreshing: true
            }
        })
    }
})(SpeakerProfile);