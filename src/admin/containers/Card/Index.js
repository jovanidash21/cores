import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import SeminarsCount from './SeminarsCount';
import SpeakersCount from './SpeakersCount';
import UsersCount from './UsersCount';

class Card extends Component {
    render(){
        const {
            seminarsCountFetch,
            speakersCountFetch,
            usersCountFetch
        } = this.props;
        const allSeminarsCountFetch = PromiseState.all([seminarsCountFetch]);
        const allSpeakersCountFetch = PromiseState.all([speakersCountFetch]);
        const allUsersCountFetch = PromiseState.all([usersCountFetch]);

        if (
            allSeminarsCountFetch.pending ||
            allSpeakersCountFetch.pending ||
            allUsersCountFetch.pending
        ) {
            return <LoadingAnimation />
        }
        else if (
            allSeminarsCountFetch.rejected ||
            allSpeakersCountFetch.rejected ||
            allUsersCountFetch.rejected
        ) {
            return <Error />
        }
        else if (
            allSeminarsCountFetch.fulfilled &&
            allSpeakersCountFetch.fulfilled &&
            allUsersCountFetch.fulfilled
        ) {
            const [seminars] = allSeminarsCountFetch.value;
            const [speakers] = allSpeakersCountFetch.value;
            const [users] = allUsersCountFetch.value;

            console.log('jocelle');

            return(
                <div className="row">
                    <SeminarsCount seminars={seminars} />
                    <SpeakersCount speakers={speakers} />
                    <UsersCount users={users} />
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        seminarsCountFetch: `/api/seminars/count`,
        speakersCountFetch: `/api/speakers/count`,
        usersCountFetch: `/api/users/count`
    }
})(Card);