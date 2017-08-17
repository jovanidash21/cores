import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Logo from './Logo';
import Nav from './Nav';

class HomeHeader extends Component {
    constructor(props) {
        super(props);

        this.handleUserAddSeminarSubmit = this.handleUserAddSeminarSubmit.bind(this);
        this.handleUserRemoveSeminarSubmit = this.handleUserRemoveSeminarSubmit.bind(this);
    }
    handleUserAddSeminarSubmit(userID, seminarID) {
        const { registerSeminar } = this.props;

        registerSeminar(userID, seminarID);
    }
    handleUserRemoveSeminarSubmit(userID, seminarID) {
        const { unRegisterSeminar } = this.props;

        unRegisterSeminar(userID, seminarID);
    }

    render() {
        const { userDataFetch, seminarProfileDataFetch } = this.props;
        if (userDataFetch.pending || seminarProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected || seminarProfileDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled && seminarProfileDataFetch.fulfilled) {
            const [ user ] = userDataFetch.value;
            const [ seminar ] = seminarProfileDataFetch.value;
            const {
                handleUserAddSeminarSubmit,
                handleUserRemoveSeminarSubmit
            } = this;

            return(
                <div id="header-wrapper" className="wrapper">
                    <div id="header">
                        <Logo
                            user={user}
                            seminar={seminar}
                            handleUserAddSeminarSubmit={handleUserAddSeminarSubmit}
                            handleUserRemoveSeminarSubmit={handleUserRemoveSeminarSubmit}
                        />
                        <Nav user={user} />
                    </div>
                </div>
            )
        }
    }
}

export default connect((props) => {
    const refreshSeminarProfileDataFetch = {
        userDataFetch: {
            url: `/api/user`,
            force: true,
            refreshing: true
        },
        seminarProfileDataFetch: {
            url: `/api/seminar/${props.seminarID}`,
            force: true,
            refreshing: true
        }
    };

    return {
        userDataFetch: {
            url: `/api/user`,
            force: true,
            refreshing: true
        },
        seminarProfileDataFetch: {
            url: `/api/seminar/${props.seminarID}`,
            force: true,
            refreshing: true
        },
        registerSeminar: (userID, seminarID) => ({
            registerSeminarFetch: {
                url: `/api/user/${userID}/register/${seminarID}`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                andThen: () => (refreshSeminarProfileDataFetch)
            }
        }),
        unRegisterSeminar: (userID, seminarID) => ({
            unRegisterSeminarFetch: {
                url: `/api/user/${userID}/unregister/${seminarID}`,
                method: 'PATCH',
                force: true,
                refreshing: true,
                andThen: () => (refreshSeminarProfileDataFetch)
            }
        })
    }
})(HomeHeader);
