import React, { Component } from 'react';
import { connect } from 'react-refetch';
import { browserHistory } from 'react-router';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Menu from './Menu';
import Header from './Header';
import DetailsBody from './DetailsBody';
import RegistrantsBody from './RegistrantsBody';

class SeminarProfile extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteSeminarSubmit = this.handleDeleteSeminarSubmit.bind(this);
    }
    handleDeleteSeminarSubmit(seminarID) {
        const { deleteSeminar } = this.props;

        deleteSeminar(seminarID);
        browserHistory.push('/admin/seminars');
    }

    render() {
        const { seminarProfileDataFetch } = this.props;

        if (seminarProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (seminarProfileDataFetch.rejected) {
            return <Error error={seminarProfileDataFetch.reason} />
        }
        else if (seminarProfileDataFetch.fulfilled) {
            const [seminar] = seminarProfileDataFetch.value;
            const { handleDeleteSeminarSubmit } = this;

            return(
                <div>
                    <Menu
                        seminar={seminar}
                        handleDeleteSeminarSubmit={handleDeleteSeminarSubmit}
                    />
                    <Header seminar={seminar} />
                    <DetailsBody seminar={seminar} />
                    <RegistrantsBody seminar={seminar} />
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        seminarProfileDataFetch: `/api/seminar/${props.seminarID}`,
        deleteSeminar: (seminarID) => ({
            deleteSeminarFetch: {
                url: `/api/seminar/${seminarID}`,
                method: 'DELETE',
                force: true,
                refreshing: true
            }
        })
    }
})(SeminarProfile);