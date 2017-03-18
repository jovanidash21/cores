import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import Header from './Header';
import DetailsBody from './DetailsBody';
import RegistrantsBody from './RegistrantsBody';

class SeminarProfile extends Component {
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

            return(
                <div>
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
        seminarProfileDataFetch: `/api/seminar/${props.seminarID}`
    }
})(SeminarProfile);