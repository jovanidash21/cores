import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Body from './Body';

class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.handleEditUserSeminarsSubmit = this.handleEditUserSeminarsSubmit.bind(this);
    }
    handleEditUserSeminarsSubmit(userID, editUserSeminars) {
        const { updateUserSeminars } = this.props;

        updateUserSeminars(userID, editUserSeminars);
    }

    render() {
        const {
            userUpdateDataFetch,
            seminarsDataFetch
        } = this.props;
        const allSeminarsDataFetch = PromiseState.all([seminarsDataFetch]);

        if (userUpdateDataFetch.pending || allSeminarsDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userUpdateDataFetch.rejected || allSeminarsDataFetch.rejected) {
            return <Error error={userUpdateDataFetch.reason} />
        }
        else if (userUpdateDataFetch.fulfilled && allSeminarsDataFetch.fulfilled) {
            const [user] = userUpdateDataFetch.value;
            const [seminars] = allSeminarsDataFetch.value;
            const { handleEditUserSeminarsSubmit } = this;

            return(
                <div id="intro-wrapper" className="wrapper style1">
                    <div className="title">
                        My Profile
                    </div>
                    <section id="intro" className="container">
                        <Body
                            user={user}
                            seminars={seminars}
                            handleEditUserSeminarsSubmit={handleEditUserSeminarsSubmit}
                        />
                    </section>
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        userUpdateDataFetch: {
            url: `/api/user/${props.userID}`,
            force: true,
            refreshing: true
        },
        seminarsDataFetch: {
            url: `/api/seminars`,
            force: true,
            refreshing: true
        },
        updateUserSeminars: (userID, editUserSeminars) => ({
            updateUserSeminarsFetch: {
                url: `/api/user/${userID}/seminars`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                body: JSON.stringify(editUserSeminars)
            }
        })
    }
})(UserDetails);