import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import Body from './Body';

class NewSeminarForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddNewSeminarSubmit = this.handleAddNewSeminarSubmit.bind(this);
    }
    handleAddNewSeminarSubmit(newSeminar) {
        const { addNewSeminar } = this.props;

        addNewSeminar(newSeminar);
    }

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
            const { handleAddNewSeminarSubmit } = this;

            return(
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <CardHeader />
                            <div className="card-body">
                                <form className="form form-horizontal">
                                    <Body
                                        speakers={speakers}
                                        handleAddNewSeminarSubmit={handleAddNewSeminarSubmit}
                                    />
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
        speakersDataFetch: `/api/speakers`,
        addNewSeminar: (newSeminar) => ({
            addNewSeminarFetch: {
                url: `/api/seminars`,
                method: 'POST',
                force: true,
                refreshing: true,
                body: JSON.stringify(newSeminar)
            }
        })
    }
})(NewSeminarForm);