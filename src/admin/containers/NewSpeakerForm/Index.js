import React, { Component } from 'react';
import { connect } from 'react-refetch';
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
    }
    render() {
        const { handleAddNewSpeakerSubmit } = this;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CardHeader />
                        <div className="card-body">
                            <form className="form form-horizontal">
                                <Body handleAddNewSpeakerSubmit={handleAddNewSpeakerSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(() => {
    const refreshSpeakersData = {
        speakersDataFetch: {
            url: `/api/users`,
            force: true,
            refreshing: true
        }
    };

    return {
        addNewSpeaker: (newSpeaker) => ({
            addNewSpeakerFetch: {
                url: `/api/speakers`,
                method: 'POST',
                force: true,
                refreshing: true,
                body: JSON.stringify(newSpeaker),
                andThen: () => (refreshSpeakersData)
            }
        })
    }
})(NewSpeakerForm);