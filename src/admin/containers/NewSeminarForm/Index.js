import React, { Component } from 'react';
import { connect } from 'react-refetch';
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
        const { handleAddNewSeminarSubmit } = this;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CardHeader />
                        <div className="card-body">
                            <form className="form form-horizontal">
                                <Body handleAddNewSeminarSubmit={handleAddNewSeminarSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(() => {
    const refreshSeminarsData = {
        seminarsDataFetch: {
            url: `/api/seminars`,
            force: true,
            refreshing: true
        }
    };

    return {
        addNewSeminar: (newSeminar) => ({
            addNewSeminarFetch: {
                url: `/api/seminars`,
                method: 'POST',
                force: true,
                refreshing: true,
                body: JSON.stringify(newSeminar),
                then: () => (refreshSeminarsData)
            }
        })
    }
})(NewSeminarForm);