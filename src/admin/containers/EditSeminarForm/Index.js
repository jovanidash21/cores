import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import CardHeader from './CardHeader';
import Body from './Body';

class EditSeminarForm extends Component {
    constructor(props) {
        super(props);

        this.handleEditSeminarSubmit = this.handleEditSeminarSubmit.bind(this);
    }
    handleEditSeminarSubmit(editSeminar) {
        const { updateSeminar } = this.props;

        updateSeminar(editSeminar);
    }

    render() {
        const { seminarUpdateDataFetch } = this.props;

        if (seminarUpdateDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (seminarUpdateDataFetch.rejected) {
            return <Error error={seminarUpdateDataFetch.reason} />
        }
        else if (seminarUpdateDataFetch.fulfilled) {
            const [seminar] = seminarUpdateDataFetch.value;
            const { handleEditSeminarSubmit } = this;

            return(
                <div>
                    <Menu seminar={seminar} />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <CardHeader />
                                <div className="card-body">
                                    <form className="form form-horizontal">
                                        <Body
                                            seminar={seminar}
                                            handleEditSeminarSubmit={handleEditSeminarSubmit}
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
        seminarUpdateDataFetch: `/api/seminar/${props.seminarID}`,
        updateSeminar: (editSeminar) => ({
            updateSeminarFetch: {
                url: `/api/seminar/${props.seminarID}`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                body: JSON.stringify(editSeminar)
            }
        })
    }
})(EditSeminarForm);