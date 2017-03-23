import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { browserHistory } from 'react-router';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import Body from './Body';

class NewUserForm extends Component {
    constructor(props) {
        super(props);

        this.handleAddNewUserSubmit = this.handleAddNewUserSubmit.bind(this);
    }
    handleAddNewUserSubmit(newUser) {
        const { addNewUser } = this.props;

        addNewUser(newUser);
        browserHistory.push('/admin/users');
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
            const { handleAddNewUserSubmit } = this;

            return(
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <CardHeader />
                            <div className="card-body">
                                <form className="form form-horizontal">
                                    <Body
                                        seminars={seminars}
                                        handleAddNewUserSubmit={handleAddNewUserSubmit}
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
        seminarsDataFetch: {
            url: `/api/seminars`,
            force: true,
            refreshing: true
        },
        addNewUser: (newUser) => ({
            addNewUserFetch: {
                url: `/api/users`,
                method: 'POST',
                force: true,
                refreshing: true,
                body: JSON.stringify(newUser)
            }
        })
    }
})(NewUserForm);