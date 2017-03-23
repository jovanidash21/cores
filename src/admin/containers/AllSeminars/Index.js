import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

class AllSeminars extends Component {
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
                    <div className="col-xs-12">
                        <div className="card">
                            <CardHeader />
                            <CardBody seminars={seminars} />
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
})(AllSeminars);