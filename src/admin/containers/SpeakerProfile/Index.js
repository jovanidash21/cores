import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Header from './Header';
import Body from './Body';

class SpeakerProfile extends Component {
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

            return(
                <div>
                    <Header speaker={speaker} />
                    <Body speaker={speaker} />
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        speakerProfileDataFetch: `/api/speaker/${props.speakerID}`
    }
})(SpeakerProfile);