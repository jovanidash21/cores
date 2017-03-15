import React, { Component } from 'react';
import { connect } from 'react-refetch';
import CardHeader from './CardHeader';
import Body from './Body';

class NewSeminarForm extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CardHeader />
                        <div className="card-body">
                            <form className="form form-horizontal">
                                <Body />
                                <Footer />
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
        addNewSeminar: (newUser, password) => ({
            addNewSeminarFetch: {
                url: `/api/seminars`,
                method: 'POST',
                body: JSON.stringify(newSeminar),
                then: () => (refreshSeminarsData)
            }
        })
    }
})(NewSeminarForm);