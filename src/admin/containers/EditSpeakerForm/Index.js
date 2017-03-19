import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import CardHeader from './CardHeader';
import Body from './Body';

class EditSpeakerForm extends Component {
    constructor(props) {
        super(props);

        this.handleEditSpeakerSubmit = this.handleEditSpeakerSubmit.bind(this);
    }
    handleEditSpeakerSubmit(editSpeaker) {
        const { updateSpeaker } = this.props;

        updateSpeaker(editSpeaker);
    }

    render() {
        const { speakerUpdateDataFetch } = this.props;

        if (speakerUpdateDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (speakerUpdateDataFetch.rejected) {
            return <Error error={speakerUpdateDataFetch.reason} />
        }
        else if (speakerUpdateDataFetch.fulfilled) {
            const [speaker] = speakerUpdateDataFetch.value;
            const { handleEditSpeakerSubmit } = this;

            return(
                <div>
                    <Menu speaker={speaker} />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <CardHeader />
                                <div className="card-body">
                                    <form className="form form-horizontal">
                                        <Body
                                            speaker={speaker}
                                            handleEditSpeakerSubmit={handleEditSpeakerSubmit}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        speakerUpdateDataFetch: `/api/speaker/${props.speakerID}`,
        updateSpeaker: (editSpeaker) => ({
            updateSpeakerFetch: {
                url: `/api/speaker/${props.speakerID}`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                body: JSON.stringify(editSpeaker)
            }
        })
    }
})(EditSpeakerForm);