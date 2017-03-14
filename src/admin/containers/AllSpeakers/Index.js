import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

class AllSpeakers extends Component {
    render() {
        const { speakersDataFetch } = this.props;
        const allSpeakersDataFetch = PromiseState.all([speakersDataFetch]);

        if (allSpeakersDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allSpeakersDataFetch.rejected) {
            return <Error error={allSpeakersDataFetch.reason} />
        }
        else if (allSpeakersDataFetch.fulfilled) {
            const [speakers] = allSpeakersDataFetch.value;

            return(
                <div className="row">
                    <div className="col-xs-12">
                        <div className="card">
                            <CardHeader />
                            <CardBody speakers={speakers} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        speakersDataFetch: `/api/speakers`
    }
})(AllSpeakers);