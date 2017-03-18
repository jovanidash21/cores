import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import CardHeader from './CardHeader';
import Body from './Body';

class EditUserForm extends Component {
    constructor(props) {
        super(props);

        this.handleEditUserSubmit = this.handleEditUserSubmit.bind(this);
    }
    handleEditUserSubmit(editUser) {
        const { updateUser } = this.props;

        updateUser(editUser);
    }

    render() {
        const { userUpdateDataFetch } = this.props;

        if (userUpdateDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userUpdateDataFetch.rejected) {
            return <Error error={userUpdateDataFetch.reason} />
        }
        else if (userUpdateDataFetch.fulfilled) {
            const [user] = userUpdateDataFetch.value;
            const { handleEditUserSubmit } = this;

            return(
                <div>
                    <Menu user={user} />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <CardHeader />
                                <div className="card-body">
                                    <form className="form form-horizontal">
                                        <Body
                                            user={user}
                                            handleEditUserSubmit={handleEditUserSubmit}
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
        userUpdateDataFetch: `/api/user/${props.userID}`,
        updateUser: (editUser) => ({
            editUserFetch: {
                url: `/api/user/${props.userID}`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                body: JSON.stringify(editUser)
            }
        })
    }
})(EditUserForm);