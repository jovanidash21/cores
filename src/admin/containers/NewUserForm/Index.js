import React, { Component } from 'react';
import { connect } from 'react-refetch';
import { browserHistory } from 'react-router';
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
        console.log(newUser);
    }

    render() {
        const { handleAddNewUserSubmit } = this;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CardHeader />
                        <div className="card-body">
                            <form className="form form-horizontal">
                                <Body handleAddNewUserSubmit={handleAddNewUserSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(() => {
    const refreshUsersData = {
        usersDataFetch: {
            url: `/api/users`,
            force: true,
            refreshing: true
        }
    };

    return {
        addNewUser: (newUser) => ({
            addNewUserFetch: {
                url: `/api/users`,
                method: 'POST',
                body: JSON.stringify(newUser),
                then: () => (refreshUsersData)
            }
        })
    }
})(NewUserForm);