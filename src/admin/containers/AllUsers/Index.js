import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

class AllUsers extends Component {
    render() {
        const { usersDataFetch } = this.props;
        const allUsersDataFetch = PromiseState.all([usersDataFetch]);

        if (allUsersDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allUsersDataFetch.rejected) {
            return <Error error={allUsersDataFetch.reason} />
        }
        else if (allUsersDataFetch.fulfilled) {
            const [users] = allUsersDataFetch.value;

            return(
                <div className="row">
                    <div className="col-xs-12">
                        <div className="card">
                            <CardHeader />
                            <CardBody users={users} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        usersDataFetch: {
            url: `/api/users`,
            force: true,
            refreshing: true
        }
    }
})(AllUsers);