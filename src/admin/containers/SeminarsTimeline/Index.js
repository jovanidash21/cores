import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import SeminarItem from './SeminarItem';

class SeminarsTimeline extends Component {
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

            return(
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <CardHeader />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="list-group __timeline">
                                            {
                                                seminars.map(seminar =>
                                                    <SeminarItem seminar={seminar} />
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
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
})(SeminarsTimeline);