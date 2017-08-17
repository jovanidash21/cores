import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import SpeakerItem from './SpeakerItem';

class SeminarsTimeline extends Component {
  render() {const { speakersDataFetch } = this.props;
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
        <div className="col-md-6">
          <div className="card">
            <CardHeader />
            <div className="card-body no-padding table-responsive">
              <table className="table card-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="right">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    speakers.map(speaker =>
                      <SpeakerItem speaker={speaker} />
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(() => {
  return {
    speakersDataFetch: {
      url: `/api/speakers`,
      force: true,
      refreshing: true
    }
  }
})(SeminarsTimeline);
