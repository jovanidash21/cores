import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Highlight from './Highlight';

class SeminarsSection extends Component {
    render() {
        const { seminarsDataFetch } = this.props;
        const allSeminarsDataFetch = PromiseState.all([seminarsDataFetch]);

        if (allSeminarsDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allSeminarsDataFetch.rejected) {
            return <Error error={allSeminarsDataFetch.reason} />
        }
        else if (allSeminarsDataFetch.fulfilled) {
            const [seminars] = allSeminarsDataFetch.value;

            return (
                <div className="wrapper style3">
                    <div className="title">Seminars</div>
                    <div id="highlights" className="container">
                        <div className="row 150%">
                            {
                                seminars.map(seminar =>
                                    <Highlight seminar={seminar} />
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        seminarsDataFetch: {
            url: `/api/seminars`,
            force: true,
            refreshing: true
        }
    }
})(SeminarsSection);
