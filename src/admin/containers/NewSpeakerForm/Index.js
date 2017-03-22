import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { browserHistory } from 'react-router';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import Body from './Body';

class NewSpeakerForm extends Component {
    constructor(props) {
        super(props);

        this.handleAddNewSpeakerSubmit = this.handleAddNewSpeakerSubmit.bind(this);
    }
    handleAddNewSpeakerSubmit(newSpeaker) {
        const { addNewSpeaker } = this.props;

        addNewSpeaker(newSpeaker);
        browserHistory.push('/admin/speakers');
    }

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
            const { handleAddNewSpeakerSubmit } = this;

            return(
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <CardHeader />
                            <div className="card-body">
                                <form className="form form-horizontal">
                                    <Body
                                        seminars={seminars}
                                        handleAddNewSpeakerSubmit={handleAddNewSpeakerSubmit} />
                                </form>
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
        seminarsDataFetch: `/api/seminars`,
        addNewSpeaker: (newSpeaker) => ({
            addNewSpeakerFetch: {
                url: `/api/speakers`,
                method: 'POST',
                force: true,
                refreshing: true,
                body: JSON.stringify(newSpeaker)
            }
        })
    }
})(NewSpeakerForm);